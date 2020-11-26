
--unique, primary key, aumentar campo, foreign key
CREATE TABLE cliente (
idCliente integer IDENTITY(1,1) PRIMARY KEY,
nombre varchar(30) CONSTRAINT UQ_nombre UNIQUE,
celular integer(12),
email varchar(30),
sexo varchar(8));

CREATE TABLE pago (
idProducto integer PRIMARY KEY,
numTarjeta integer(16),
fechaVto DATE,
cvv integer(3),
total integer(10));

CREATE TABLE carrito (
idProducto integer PRIMARY KEY,
cantidad integer(5),
precio integer(10),
subtotal integer(10),
total integer(10));

CREATE TABLE detallePto (
idProducto integer PRIMARY KEY,
tipo varchar(15),
precio integer(10),
descripcion varchar(100));

CREATE TABLE producto (
idProducto integer PRIMARY KEY,
tipo varchar(15),
talla integer(10),
color varchar(20),
precio integer(10));

CREATE TABLE categoria (
idcategoria integer PRIMARY KEY,
idProducto integer,
sexo varchar(15),
FOREIGN KEY (sexo_cliente) REFERENCES cliente(sexo));


