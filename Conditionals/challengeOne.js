'use strict'; 
const const1='http://placehold.it/300x300';//charge image
var var1='http://www.fillmurray.com/300/300';//var empty to charge url
const redElement = document.querySelector('.prueba');//callcss

var1!=prompt('Ingrese la url: ');//alert to paid url

if (var1 !='http://www.fillmurray.com/300/300'){
    var1=const1;
    redElement.innerHTML=` <img src="${var1}" alt="">`;//show in screem
}
else if(var1=='http://www.fillmurray.com/300/300'){
    redElement.innerHTML=`<img src="${var1}" alt="">`;
}