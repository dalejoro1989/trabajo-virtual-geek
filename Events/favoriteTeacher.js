'use strict';
//def var teachers... and take the cclass defined teacher

let teacherIsra = document.querySelector('.teacher--isra');
let teacherTuerto = document.querySelector('.teacher--tuerto');
let teacherNasi = document.querySelector('.teacher--nasi');

//listen event and work 

const toggleClass = (ev) => {
    ev.target.classList.toggle('teacher--selected')
    // ev.srcElement.classList.toggle('teacher--selected');
}

//in momentt of clic do
teacherIsra.addEventListener('click', toggleClass);
teacherTuerto.addEventListener('click', toggleClass);
teacherNasi.addEventListener('click', toggleClass);