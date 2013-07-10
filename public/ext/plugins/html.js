define(["ws-path-resolver", "doT"], function(pr, doT){
   return {
      load: function (name, req, onload, config) {
         if (config["testing"]){
            name = pr(name, "xhtml", config["testing"]);

            req(["text!" + name], function (html) {
               try{
                  onload(doT.template(html));
               }
               catch (e){
                  throw e;
               }
            });
         }
         else{
            name = pr(name, "dot.js");

            req([name], function (html) {
               onload(html);
            });
         }
      }
   }
});