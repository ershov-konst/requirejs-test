define(function(){
   return {
      load: function (name, req, onload, config) {

         req(["/super/" + name + ".js"], function (js) {
            onload(js);
         });

      }
   }
});