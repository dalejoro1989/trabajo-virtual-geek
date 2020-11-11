//petición usando fetch un API para obtener un emoji
//(piedra, papel, tijera, lagarto o spok) aleatorio en https://rand.fun/. 

//forma arrow
fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
  .then(response => response.json())
  .then(data => document.body.innerHTML = data.result)

  //formalarga
  /*
  fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
    .then(function(response) {    
            return response.json();  
        }
    ).then(function(data) {     
            document.body.innerHTML = data.result;  
    }
);
*/