var express = require('express');
var app = express();
var requirejs = require('requirejs');

function runServer(){
   app.listen(777);
   console.log("port : 777");
}

app.configure('production', function(){
   app.use(express.static("./public_build"));
   requirejs.optimize({
      appDir : "./public",
      mainConfigFile : "main.js",
      dir : "./public_build",
      modules : [
         {
            name : "../modules/module1"
         },
         {
            name : "../modules/module2"
         }
      ]
   }, runServer);
});
app.configure('development', function(){
   app.use(express.static("./public"));
   runServer();
});



