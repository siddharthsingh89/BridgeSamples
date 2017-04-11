$._APPLIB_= 
{    
    getAppName : function()
            {    
            return "Called getAppName() : AppName  =  "+ app.name;
            },
        
     getAppLocale : function()
            {    
             return "Called getAppLocale() : Applocale =  " + app.locale;    
            },
      
      getListofCollections : function()
              {
                        
                       var collections =  app.getCollections();
                       var collectionlist = "";
                       for(var i=0;i<collections.length;i++)
                       {
                           collectionlist = collectionlist + collections[i].name +"<br>";                           
                        }
                    return "Called getListofCollections()  L "+"<br>" + collectionlist;
               }
       
};


