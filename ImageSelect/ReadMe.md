<h1> ImageSelect Sample Extension </h1>

This sample extension provides a way to handle Bridge-specific events in a CEP extension(specifically clicking on a file(s) in the Content panel and having that trigger an action in CEP panel).

This involves two parts-

1. A script to listen to click events(or any events) and dispatch them to CEP Extensions. This Script( a jsx file)  will be part of Bridge startup script and executed automatically when Bridge is launched. It will listen to the click events and relay them to CEP extension via PlugPlugExternalObject.

2. A CEP extension to listen to the event and perform action based on them.

When the Extension is launched from Bridge, the event handling script is written(if it is not already present) to the Bridge Startup Script folder using CEP file APIs. After the file is written, we need to restart Bridge once. Now, this script is executed everytime whenver Bridge is launched.

It  uses CEP apis such as window.cep.fs.writeFile() and window.cep.fs.readFile() to read and write event file to Bridge Startup Script folder.

The event handler script relays the thumbnail select events to CEP extension via the PlugPlugExternalObject API available with Bridge. You can notice below that, whenever there is a selection change event in Bridge, we are sending a custom event <b> thumbnailclicked </b>  to the CEP Extension along with thumbnail path as the event data.

<b> eventloader.jsx </b>
```
if (event.object instanceof Document) 
    {
        if (event.type == "selectionsChanged")
        {             
            var externalObjectName = "PlugPlugExternalObject"; 
            var mylib = new ExternalObject( "lib:" + externalObjectName ); 
            var eventObj = new CSXSEvent(); 
            eventObj.type="thumbnailclicked"; 
            var thumb =  app.document.selections[0];
            if(thumb)
            {
                var filepath = thumb.spec.fsName;                 
                if( Folder.fs != "Windows" )
                {
                  filepath = "file://"+filepath;
                }          
                eventObj.data=filepath;
                eventObj.dispatch();
             }
         }
    }
```

In order to listen to the <b> thumbnailclicked </b> event in our CEP extension, we add a listener in the extension javascript .  Here, we are updating the img src with the thumbnail path selected.

<b> main.js </b>
```
csInterface.addEventListener("thumbnailclicked", function(event) {
	var path= event.data;	
    $('#image').attr('src',path);
    $('#filepath').text(path);
     
});
```
This works on Both Win and Mac.

To use this sample, Please follow below steps-

1) Download\Clone the Repo and copy the ImageSelect sample Extension folder to CEP supported paths. Please refer to <a href="https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation"> Bridge CEP documentation </a> for CEP Supported paths.

2) Enable Debug mode for Extensions as the extension is not signed. Refer to <a href="https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation"> Bridge CEP documentation </a>  for using unsigned CEP extensions in Bridge.

3) Launch Adobe Bridge CC 8.0 and later.

4) Go to Window -> Extension and Click on the ImageSelect Extension from the list of extensions.
 
 Refer to <a href="https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation"> Bridge CEP documentation </a> for detailed guidelines for using CEP Extensions in Bridge.

5) After you Launch the Extension, Click on OK after an Alert message displayed to restart Bridge.

6) Restart Bridge.

7) Now Select JPEG images in the content panel and it will be displayed in the CEP Extension.
