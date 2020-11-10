/*
Vamos a detenernos un momento aquí: el segundo argumento es una función. Y es que en JavaScript
 podemos pasar el nombre de una función como argumento de otra. Es esta función que recibe el 
 argumento la que se encarga de ejecutarla. Puedes ver un ejemplo en este pen.
Observa la diferencia entre la ejecución de una función
logError()
y el nombre de una función
logError
Esto puede parecer un poco raro y complejo al principio, pero iremos descubriendo en el curso que es 
muy útil. A este tipo de funciones que se pasan como argumentos a otras, se les llama callbacks.
Por lo tanto la función que le pasamos a addEventListener como segundo argumento es un callback, no 
la ejecutamos nosotras, es ejecutada por addEventListener cuando sucede el evento.
Para pasar un callback como argumento, podemos utilizar el nombre de una función ya declarada (como 
    vimos en el ejemplo anterior), o podemos declararla directamente cuando la pasemos como argumento. 
    Son dos maneras diferentes de hacer lo mismo. Vamos a ver el ejemplo anterior, pero declarando 
    la función cuando la pasamos como argumento.
*/
function addName(userName, className, callback) {
    const userNameElement = document.querySelector(className);
    
    if(userName && userNameElement) {
      /* 
      ** Si el valor de userName 
      ** y el valor de userNameElement
      ** son truthy
      ** añadimos el nombre a la etiqueta de HTML 
      */
      userNameElement.innerHTML = userName;
    } else if(callback){
      /* 
      ** Si el valor de userName 
      ** o el valor de userNameElement
      ** son falsy
      ** y callback es truthy
      ** ejecutamos la función callback
      */
      callback();
    }
  }
  
  function logError() {
    console.log('error');
  }
  
  addName('María', '.first-user__name', logError);
  addName('Roberto', null, logError);
  addName('', '.third-user__name', logError);