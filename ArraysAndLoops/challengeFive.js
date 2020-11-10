//creamos array
const numbers = [4, 2, 7, 8, 6];
//creamos var acumulator initializa zero
let acc = 0;
//loops for itera mientras la medida del array obtenida por .lenght tenga elementos
for (let i = 0; i<numbers.length; i++){
    //acumulator suma cada numero del arry
    acc += numbers[i];
  }
  //operacion para sacar la media
let media = acc/numbers.length;
//show in pantalla
console.log(media);
