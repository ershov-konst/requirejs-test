define(function(){
   return {
      load: function (name, req, onload, config) {
         var path = "/super/" + name + ".js";
         if (!config.appDir){
            path = ".." + path;
         }
         req([path], function (js) {
            onload(js);
         });

      }
   }
});