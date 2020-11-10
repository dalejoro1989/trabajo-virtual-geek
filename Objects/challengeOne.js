//crear objeto geekGirl one
const geekGirl = {};
geekGirl.name = 'Juanita';
geekGirl.edad = '62 años'
geekGirl.trabajo='Quimica'
// function presentation this --> geekgirl
geekGirl.presentation = function (){
    document.querySelector('h1').innerHTML = 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.trabajo; ;
  return 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.trabajo;
}

//muestra en consola la presentacion de cada geekgirl
console.log(geekGirl.presentation());

// geekdirl dos
//objeto geekgirl two
const geekGirl2 = {};
geekGirl.name = 'Juliana';
geekGirl.edad = '32 años'
geekGirl.trabajo='agronoma'

//function presentation2
geekGirl.presentation2 = function (){
    document.querySelector('p').innerHTML = this.name + " " +', ' + " " + this.edad+ " " + ', '+ " " +this.trabajo; ;
return  this.name + " " +',' + " " + this.edad+ " " + ','+ " " +this.trabajo;
}

//muestra en consola la presentacion de cada geekgirl
console.log(geekGirl.presentation2());