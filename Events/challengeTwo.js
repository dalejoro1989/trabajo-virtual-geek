/*
Crear una página HTML con un input de tipo texto para introducir tu nombre y un botón. Al pinchar 
sobre el botón, imprimir en la consola el mensaje 'Hola ', con el nombre que aparece en el input de texto.
Nota: La etiqueta input no tiene apertura y cierre, por lo tanto técnicamente no tiene contenido. 
Si para recoger el contenido de una etiqueta con apertura y cierre utilizábamos innerHTML, 
para recoger el valor de un input utilizaremos value.
*/
'use strict';
//responde  a funcion
document.querySelector('.button').addEventListener('click', () => {
//var name input value var que entra
    let name = document.querySelector('input').value;
//alerta creada y ingresamos nombre al lado
    alert(`Hola, ${name}`);
//mostramos en consola
    console.log(`Hola, ${name} :)`);
})