//show in console press f12
//NO FUNCTIONS
const pay = document.querySelector('.pay');
console.log('RESTAMOS 2 DEL CHUPITO DE SAKE: ', 128 - 2, '€ QUE SON PARA DIVIDOIR ENTRE TODOS');
console.log('PAGA CADA UNA: ', 126 / 9, '€ POR LA COMIDA');
console.log('ANA CON SU CHUPITO DE SAKE : ', ( 126 / 9 ) + 2, '€');

//WITH FUNCTION

function pago() {
    let a = (128 / 9) - 2;
    let b = a + 2;
    
    pago = (b);
    console.log('Ana debe pagar: ' + b + '€');
    console.log('las tias deben pagar: ' + a + '€');
}
pago()