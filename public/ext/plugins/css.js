define(["ws-path-resolver"], function(pr){
   return {
      load: function (name, req, onload, config) {
         if (config["testing"]){
            onload("");
         }
         else{
            req(["r-css!" + pr(name, "css")], function (css) {
               onload(css);
            });
         }
      }
   }
});