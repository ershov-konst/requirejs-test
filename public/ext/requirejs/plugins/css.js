define([], function(){
   return {
      load: function (name, req, onload, config) {
         console.log("css load");
         req(["r-css!/css/" + name], function (js) {
            onload(js);
         });

      },
      write : function(){
         console.log("write");
      },
      pluginBuilder : "css"
   }
});