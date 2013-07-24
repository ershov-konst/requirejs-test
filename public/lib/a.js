define("a", ["b"], function(){
   console.log("a");
   return {
      test : function(){
         console.log("module a - test method");
      }
   }
});
