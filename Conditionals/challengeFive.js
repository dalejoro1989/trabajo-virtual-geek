let div = document.querySelector('.div');
let h1 = document.querySelector('.h1');
let p = document.querySelector('.p');


const activableSection = document.querySelector('.activable-section');
if (activableSection.classList.contains('.warning')) {
    h1.innerHTML = 'AVISO';
    p.innerHTML = 'Tenga cuidado';
}
else if (activableSection.classList.contains('.error')) {
    h1.innerHTML = "ERROR";
    p.innerHTML = "Ha surgido un error"
    }
    else if (activableSection.classList.contains('.success')) {
        h1.innerHTML = 'CORRECTO';
        Ph1.innerHTML = 'Los datos son correctos';
        }




/*
(div.classList.contains('.warning')) ? h1.innerHTML = 'AVISO' : '';
(div.classList.contains('.warning')) ? p.innerHTML = 'Tenga cuidado' : '';

(div.classList.contains('.error')) ? h1.innerHTML = 'AVISO' : '';
(div.classList.contains('.error')) ? p.innerHTML = 'Ha surgido un error' : '';

(div.classList.contains('.success')) ? h1.innerHTML = 'CORRECTO' : '';
(div.classList.contains('.success')) ? h1.innerHTML = 'Los datos son correctos' : '';
*/