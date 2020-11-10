/*
De esta forma, cuando hagamos click sobre el botón se ejecutará la función showAlert. 
Es importante que te fijes en algunos detalles importantes:
La función addEventListener la registramos sobre button que
 es un elemento de HTML (en este caso un botón).
El primer argumento que le pasamos a addEventListener es una cadena con el nombre del 
evento, en este caso click
El segundo argumento que le pasamos a addEventListener es una función, es decir, 
ponemos el nombre de la función pero no la ejecutamos (no ponemos paréntesis al final)
*/

// elemento de HTML querySelector:
const button = document.querySelector('.alert');
// handler arrow /// showAlert is the function /// console.log show in console f12
const showAlert = () => console.log('Alerta boton selecionado');
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener('click', showAlert);
//show in web screen
/*
const divElement = document.querySelector('.div');
const content = 'Alerta boton selecionado';
divElement.innerHTML = content;
*/