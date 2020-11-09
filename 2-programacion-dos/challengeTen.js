//parseInt() podemos convertir una cadena en un número entero.

const age = 31;
const hourAge = 8760;
liveAge = age * hourAge;


console.log(`las horas vividas son ${liveAge}`);

console.log("las horas vividas son "+liveAge+ 'caracteres');

document.querySelector('body').innerHTML =`<h1>Mis horas vividas son ${liveAge}</h1>`;