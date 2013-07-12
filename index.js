var express = require('express');
var app = express();
var requirejs = require('requirejs');

app.use(express.static("./public_build"));
/*requirejs.optimize({
   appDir : "./public",
   mainConfigFile : "./public/main.js",
   dir : "./public_build",
   modules : [
      {
         name : "../modules/module1"
      }
   ]
}, function(){
   app.listen(777);
   console.log("port : 777");
});*/
requirejs.optimize({
   mainConfigFile : "./public/main.js",
   include : ["a", "d", "super!b"],
   out : "public/modules/module3-opt.js"
}, function(){
   app.listen(777);
   console.log("port : 777");
});




