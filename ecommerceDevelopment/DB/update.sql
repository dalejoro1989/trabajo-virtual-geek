UPDATE cliente
SET nombre = 'carlos rivera', Celular= '8569885698'
WHERE idCliente = 1;

UPDATE pago
SET numTarjeta = '456998875632'
WHERE idproducto = 1;

UPDATE carrito
SET cantidad = '2'
WHERE idProducto = 1;

UPDATE detallePto
SET tipo = 'pantalon'
WHERE idProducto = 1;

UPDATE producto
SET color = 'negro'
WHERE idProducto = 1;