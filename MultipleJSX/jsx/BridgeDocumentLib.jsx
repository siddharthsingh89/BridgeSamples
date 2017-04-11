$._DOCLIB_= 
{    
    getPalettesList : function()
            {    
            var list = app.document.palettes;
            var paletteList = "";
            for(var i=0;i<list.length;i++)
            {
                    paletteList = paletteList + list[i].title +"<br>";         
             }
         return "Called getPalettesList() "+ "<br>"+paletteList;           
         },
        
     getDocumentHandle : function()
            {    
             return "Called getDocumentHandle() : " + "<br>" +  app.document.hwnd;    
            }         
};


