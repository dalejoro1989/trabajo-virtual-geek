let div = document.querySelector('.div');
let h1 = document.querySelector('.h1');
let p = document.querySelector('.p');

(div.classList.contains('.warning')) ? h1.innerHTML = 'AVISO' : '';
(div.classList.contains('.warning')) ? p.innerHTML = 'Tenga cuidado' : '';

(div.classList.contains('.error')) ? h1.innerHTML = 'AVISO' : '';
(div.classList.contains('.error')) ? p.innerHTML = 'Ha surgido un error' : '';

(div.classList.contains('.success')) ? h1.innerHTML = 'CORRECTO' : '';
(div.classList.contains('.success')) ? h1.innerHTML = 'Los datos son correctos' : '';
