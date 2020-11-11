<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>challenge Nine arrays and loops</title>
  </head>
  <body>
      <h1>Peticiones y consumo de servicios - Parte Uno</h1>
      <p>
      Introducción
En esta sesión vamos a aprender a utilizar AJAX que es el puente entre el cliente (navegador) y el servidor, entre el frontend y el backend de nuestra aplicación. Las peticiones AJAX nos permiten acceder y manipular datos en el servidor, pero iniciando el proceso en el frontend.
AJAX viene de Asynchronous JavaScript And XML porque cuando se creó servía para hacer peticiones al servidor desde JS y normalmente el formato de datos que nos devolvía era XML (una forma de escribir los datos para poder enviarlos). Pero actualmente no es así y AJAX ahora utiliza otros tipos de datos, desde texto hasta JSON que veremos más adelante. Pero el hecho de que sea asíncrono sí es importante. Aunque sea una palabra que asusta, asíncrono simplemente significa trabajar con eventos (como hemos visto en las sesiones anteriores), es decir, que cuando sucede un evento se ejecuta una función. Se llama asíncrono porque nosotros no ejecutamos el código de forma síncrona (una instrucción detrás de otra) sino que el código se ejecuta cuando sucede un evento.
El uso de AJAX, por tanto, nos permite acceder a información en un servidor que normalmente se accede mediante un API. Veremos un API como una URL (dirección de Internet) donde podemos consultar o guardar datos de un servicio. Veremos más detalles sobre APIs en la próxima sesión.
¿En qué casos se utiliza?
Algunos ejemplos de uso de AJAX que podemos encontrar en una webApp (aplicación web):
Cuando realizamos una búsqueda de pisos en Airbnb, hacemos una petición AJAX al servidor, y cuando nos devuelve los datos de los pisos lo pintamos en el HTML.
Cuando en nuestra app de tareas marcamos una tarea como terminada, se envía una petición al servidor para que almacene en base de datos que esa tarea ha sido completada; así, al abrir la app en nuestro móvil aparecerá como completada.
En Gmail, el listado de nuestros correos se obtiene de una petición al servidor; cuando marcamos un correo como leído se envía la información al servidor; o cuando enviamos un correo, éste se envía a un servidor para que lo lleve a su destinatario.
En esta sesión aprenderemos también cómo trabajar en casos de asincronía compleja, como por ejemplo:
realizar una acción cuando se hayan completado varios procesos asíncronos que dependen uno del otro (peticiones encadenadas)
realizar una acción cuando se hayan completado varios procesos asíncronos que se ejecutan en paralelo (peticiones en paralelo)
Veamos algunos casos de ejemplo donde es necesario ejecutar peticiones encadenadas:
en una web sobre perros, hago una primera petición al servidor sobre las razas disponibles y después hago una segunda petición para pedir información de perros de una raza concreta
en una web con área privada, cuando la usuaria introduce su email y su contraseña, hago una petición al servidor para autenticarla, el servidor me devuelve un string que identifica a la usuaria, con el hago una petición para pedir sus datos privados y mostrarlos en el área privada.
Veamos algunos ejemplos en la web de peticiones que se ejecutan en paralelo:
cuando buscamos en una app de transporte cuál es la ruta más rápida entre dos puntos y necesitamos obtener información de distintas APIs web (taxis, InDriver, Uber, Cabify...) y esperar a recibir la respuesta de todas para reflejar cual será la opción más rápida entre ellas
Fetch
A día de hoy la manera estándar de acceder a datos en el servidor desde nuestro frontend es fetch, una nueva API del navegador que funciona gracias a una forma moderna de manejar la asincronía de JavaScript llamada Promesas. Hasta ahora el estándar había sido usar el objeto XMLHttpRequest que trabaja con callbacks y que veremos al final de esta sesión como bonus.
      </p>
  </body>
</html>