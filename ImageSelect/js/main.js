
var csInterface = new CSInterface();	
var OSVersion = csInterface.getOSInformation();
var isMacOS = OSVersion.indexOf("Mac") >=0;



function InitilizeExtension()
{
	
	var bridgeExePath = csInterface.getSystemPath(SystemPath.HOST_APPLICATION);

	var bridgeVersion = getBridgeVersion(bridgeExePath);
	if(!bridgeVersion)
	{
	   console.log('Bridge Version not found correctly for Bridge Exe Path :' + bridgeExePath);
	}
	var startupScriptSection = "/Adobe/Bridge CC "+ bridgeVersion +"/Startup Scripts/";
	var folderPath = csInterface.getSystemPath(SystemPath.USER_DATA);

	var eventFile = 'eventLoader.jsx';
	
	startupScriptPath = folderPath + startupScriptSection + eventFile;
	
	var result = window.cep.fs.readFile(startupScriptPath);
   
	//if eventLoader.File is already present
	if(0 == result.err)
	{		
		console.log('eventLoader file is already present.');
	}
	else
	{		
		copyEventJSX(startupScriptPath);
	}	
}

function copyEventJSX(targetPath)
{	
	var osEventFile = "//jsx//eventLoader.jsx"; 

	var sourceFilePath = csInterface.getSystemPath(SystemPath.EXTENSION) + osEventFile;	

	var readResult = window.cep.fs.readFile(sourceFilePath);

	if(readResult.err == 0)	
	{
		var writeResult = window.cep.fs.writeFile(targetPath,readResult.data);
		
		if(writeResult.err == 0)
		{
			alert('Please restart Adobe Bridge CC 2018 for changes to take effect.');

		}
		else
		{
			alert('Error during File I/O - Error code : '+ writeResult.err);
		}
	}
	else
	{
		alert('Error during File I/O - Error code : '+ readResult.err);
	}



}


function getBridgeVersion(bridgeExePath)
{  
    var pathToArray = bridgeExePath.split('/');   
    var bridgeVersion = null;
    if(isMacOS)        
    {
        //Mac Path : /Application/Adobe Bridge CC 2018/Adobe Bridge CC 2018.app/Contents/MacOS/Adobe Bridge CC 2018
       var macbridgeName = pathToArray[pathToArray.length -1];
	//(macbridgeName = Adobe Bridge CC 2018
       if(macbridgeName && macbridgeName.split(' ').length == 4)
       {
          bridgeVersion = macbridgeName.split(' ')[3];
       }
    }
    else
    { 
        var winbridgeName = pathToArray[pathToArray.length -2];
       //Win Path : C:/Program Files/Adobe/Adobe Bridge CC 2018/Bridge.exe 
       if(winbridgeName && winbridgeName.split(' ').length ==4)
       {
          bridgeVersion = winbridgeName.split(' ')[3];
        }
        
     }
    return bridgeVersion;
}


InitilizeExtension();

csInterface.addEventListener("thumbnailclicked", function(event) {

	var path= event.data;	
    $('#image').attr('src',path);
    $('#filepath').text(path);
     
});







