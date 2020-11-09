var ageDog = window.prompt("¿Cuantos años tiene el perro?"); 
    if(ageDog == 1){
    ageDog = 15;
		document.write("Su perro tiene" + ageDog + "años humanos");
	}else if(ageDog == 2){
        ageDog = 24
        document.write("Su perro tiene" + ageDog + "años humanos");
    }
    else if(ageDog > 2){
        ageDog =  (ageDog * 5) + 24; 
        document.write("Su perro tiene" + ageDog + "años humanos");
    }
    else{
		document.write("El perro ya murio o no existe");
	}