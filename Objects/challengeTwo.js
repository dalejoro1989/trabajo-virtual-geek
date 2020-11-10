//crear objeto geekGirl one
const geekGirl = {
name : 'Juanita',
edad : '62 años',
trabajo :'Quimica',
//metodo  y funcion rapida
run: () => console.log('Estoy corriendo'),
// metodo funcion rapida arrow with distance value link
runAMarathon: (distance) => console.log(`Estoy corriendo un maraton de ${distance} kilometros`)
};
//cALL function
geekGirl.run();
geekGirl.runAMarathon(50);