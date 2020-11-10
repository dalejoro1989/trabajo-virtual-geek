/*
Ticket con IVA
Crea una función que reciba como parámetro un número, que representará un precio,
y devuelva un texto en el que ponga el precio sin IVA, el IVA (21%) y el total.
 Por ejemplo, si pasamos por parámetro un 10, la función pintará en la consola 
 "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1".
Para probar que funciona, ejecuta la función recogiendo el resultado en una 
variable e imprímela en la consola para comprobarlo.
*/
'use strict';
/*let total, iva, result, precio;
function value(precio) {
iva = precio * 0.21;
total = precio + iva;
   return total, iva, result;
    }
        result = value(10000);
        console.log("precio sin iva: " + precio);
        console.log("IVA: " + iva);
        console.log("Total: " + total);
*/
        function precio(valor){
    const iva = (valor*0.21);
    const total = valor + iva;
    const result = `Precio sin Iva: ${valor}, Iva: ${iva}, y Total: ${total}`;

    return result;
}

console.log(precio(10000));