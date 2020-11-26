--insert(5)
INSERT INTO cliente (nombre, celular,  email, sexo)
VALUES ('diego', '3104269301', 'diegorojas227@hotmail.com', 'hombre');
--
INSERT INTO pago (idproducto, numtarjeta,  fechavto, cvv, total)
VALUES ('1111', '3104 4589 6321 2589', '01/21', '256', '50000');
--
INSERT INTO carrito (idproducto, cantidad,  precio, subtotal, total)
VALUES ('3104', '2', '50000', '50000');
--
INSERT INTO detallepto (idproducto, tipo , precio, descripcion)
VALUES ('3104', 'camiseta', '50000', 'camiseta algodon');
--
INSERT INTO producto (idproducto, tipo, talla, color, precio)
VALUES ('3104', 'camiseta', 'S', 'negro', '30000');