/*
Crear una página HTML con un párrafo con lorem ipsum. Al poner el ratón sobre el párrafo, vamos a añadir un nuevo 
párrafo a la página con lorem ipsum.
*/
"use strict";
//responde funcion al pasar el mouse por el parrafo .p  arrow function
document.querySelector(".p").addEventListener("mouseover",()=>{
//muestra en el screem .innerhtml  y pone otro parrafo <p>
document.querySelector(".body").innerHTML += '<p>lorem ipsum</p>'
})