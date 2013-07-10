var express = require('express');
var app = express();
var requirejs = require('requirejs');


app.use(express.static("./public"));

requirejs.optimize({
   /*appDir : "./public",*/
   baseUrl: "./public/lib",
   name : "modules/module1",
   out : "modules/module1-build.js"
   /*dir : "./public_build",
   modules : [
      "modules/module1",
      "modules/module2"
   ]*/
}, function(){
   app.listen(777);
   console.log("port : 777");
});




