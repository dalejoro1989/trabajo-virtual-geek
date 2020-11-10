const cont = {
    valorMaximo : 10,
    valorMinimo : 1,
    valorInicial : 4 ,
    valorActual : 3,
    aumentar : function() {return (this.valorInicial + 2 )},
    disminuir : function() { return (this.valorInicial - 1 )},
    restablecer : function(){ return (this.valorActual)}
  }
  console.log(cont.aumentar())
  console.log(cont.disminuir())
  console.log(cont.restablecer())