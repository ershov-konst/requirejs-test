define(["ws-path-resolver"], function(pr){
   return {
      load: function (name, req, onload, config) {
         name = pr(name, "js", config["testing"]);

         req([name], function (js) {
            onload(js);
         });

      }
   }
});