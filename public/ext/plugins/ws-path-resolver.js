/**
 *
 */
define(function(){
   /**
    * возвращает url по которому необходимо сделать запрос
    * @param name {String} - строка вида namespace.filename
    * @param ext  {String} - расширение [css, js, html]
    */
   return function(name, ext, testing){
      var path = [];
      //если в имени содержиться точка, то понимаем, что это компонент
      if (testing){
         path.push("/test");
      }
      if (name.indexOf(".") > -1){
         path.push("/components/");

         if (name.indexOf("/") == -1){
            name = name.replace(/[^\.]+$/g, function(c){
               return [c, c].join("/");
            });
         }

         name = name.replace(/\./g, "/");
      }
      else{
         path.push("/core/lib/")
      }

      path.push(name);
      path.push("." + ext);

      return path.join("");
   }

});
