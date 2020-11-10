//crear objeto geekGirl
const geekGirl = {};
geekGirl.name = 'Juanita';
geekGirl.edad = '62 años'
geekGirl.trabajo='Quimica'
// function presentation this --> geekgirl
geekGirl.presentation = function (){
  return 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.trabajo;
}

//muestra en consola la presentacion de cada geekgirl
console.log(geekGirl.presentation());

// geekdirl dos
//objeto
const geekGirl2 = {};
geekGirl.name = 'Juliana';
geekGirl.edad = '32 años'
geekGirl.trabajo='agronoma'

//function presentation2
geekGirl.presentation2 = function (){
return 'Hola, Mi nombre es' + " " + this.name + " " +'tengo' + " " + this.edad+ " " + 'y soy'+ " " +this.trabajo;
}

//muestra en consola la presentacion de cada geekgirl
console.log(geekGirl.presentation2());