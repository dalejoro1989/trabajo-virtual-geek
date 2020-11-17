function  navPages() {
    document.getElementById("productos").href="productos.html";
    document.getElementById("detalleProductos").href="detalleProducto.html";
    document.getElementById("pago").href="pago.html";
    document.getElementById("carrito").href="carrito.html";
    document.getElementById("pUnoHombre").href="detalleProducto.html";
    document.getElementById("pDosHombre").href="detalleProducto.html";
    document.getElementById("pUnoMujer").href="detalleProducto.html";
    document.getElementById("pDosMujer").href="detalleProducto.html";
}

function mostrar() {
    div = document.getElementById('flotante');
    div.style.display = '';
}

function cerrar() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}

function mostrar1() {
    div1 = document.getElementById('flotante1');
    div1.style.display = '';
}

function cerrar1() {
    div1 = document.getElementById('flotante1');
    div1.style.display = 'none';
}