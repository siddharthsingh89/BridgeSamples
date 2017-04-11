// Get a reference to a CSInterface object
var csInterface = new CSInterface();	

var resultbuilder ='';

function CallAppLibMethods() {
	resultbuilder='';
	csInterface.evalScript("$._APPLIB_.getAppLocale()",CallBack);
	csInterface.evalScript("$._APPLIB_.getAppName()",CallBack);
	csInterface.evalScript("$._APPLIB_.getListofCollections()",CallBack);

}

function CallDocLibMethods() {
	resultbuilder='';
    csInterface.evalScript("$._DOCLIB_.getPalettesList()",CallBack);
	csInterface.evalScript("$._DOCLIB_.getDocumentHandle()",CallBack);	
}


function CallBack(result)
{    
   resultbuilder = resultbuilder + result +"<br>";
   console.log('Calling callback' + result);
   document.getElementById("response").innerHTML = resultbuilder; 
}

function loadJSX() {
    var csInterface = new CSInterface();
    var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
    //$._ext.evalFiles() is defined in ExtendScriptLoader.jsx which is called when extension loads
    csInterface.evalScript('$._ext.evalFiles("' + extensionRoot + '")');
}

