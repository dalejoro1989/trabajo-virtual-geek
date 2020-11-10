'use strict';

const geekGirl1 = {
    	name : 'Juanita',
	edad : '62 años',
	trabajo :'Quimica',

    	showBio: function() {
        console.log('Mi nombre es '+this.name+ " " +'tengo'+ " " +this.edad+ " " + 'soy' + " " +this.trabajo);
  }
}
geekGirl1.showBio()


const geekGirl2 = {
   	name : 'Juliana',
	edad : '32 años',
	trabajo :'Agronoma',

    	showBio: function() {
        console.log('Mi nombre es '+this.name+ " " +'tengo'+ " " +this.edad+ " " + 'soy' + " " +this.trabajo);
  }
}
geekGirl2.showBio()