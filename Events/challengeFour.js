//definimos var peliculas 

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

//escucha evento al hacer clic en boton function flecha
document.querySelector('button').addEventListener('click', () => {
    //integra con html
        document.querySelector('body').innerHTML +=
    //lista ordenada con peliculas enlazadas y con clase 
    `<ol>
            <li class="inception">${inception}</li>
            <li class="theButterFlyEffect">${theButterFlyEffect}</li>
            <li class="eternalSunshineOfTheSM">${eternalSunshineOfTheSM}</li>
            <li class="blueVelvet">${blueVelvet}</li>
            <li class="split">${split}</li>
        </ol>;`
    //escucha y genera evento con clase al clic muestra el nimbre de cada pelicula//

        document.querySelector('.inception').addEventListener('click', showName);
        document.querySelector('.theButterFlyEffect').addEventListener('click', showName);
        document.querySelector('.eternalSunshineOfTheSM').addEventListener('click', showName);
        document.querySelector('.blueVelvet').addEventListener('click', showName);
        document.querySelector('.split').addEventListener('click', showName);
    });
// function show in console
    const showName = (e) => console.log(e.srcElement.innerText);

  
