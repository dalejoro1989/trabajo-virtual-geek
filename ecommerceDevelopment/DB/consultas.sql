--select
SELECT nombre FROM cliente;
SELECT * FROM cliente;
--case - when
SELECT cantidad,
CASE
    WHEN cantidad > 12 THEN 'la cantidad es mayor de 12 aplica descuento'
    ELSE 'la cantidad es menor de docena'
END AS cantidad
FROM pago;
--DATE_FORMAT
SELECT DATE_FORMAT("01-2021", "%M %Y");
--e INNER JOIN.
SELECT producto.idProducto, cliente.nombre
FROM ordenes
INNER JOIN cliente ON Ordenes.idCliente = cliente.idCliente;
--LEFT JOIN.
SELECT cliente.nombre, ordenes.idOrdenes
FROM cliente
LEFT JOIN ordenes ON cliente.idCliente = ordenes.idCliente
ORDER BY cliente.nombre;
--WHERE
SELECT * FROM cliente
WHERE nombre ='Diego Rojas';
--ORDER BY
SELECT * FROM cliente
ORDER BY nombre;
--GROUP BY
SELECT COUNT(idCliente), nombre
FROM cliente
GROUP BY nommbre;
