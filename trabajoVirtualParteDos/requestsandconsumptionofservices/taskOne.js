/*Numero aleatorio
Vamos a jugar un poco con el código en codepen del ejemplo anterior. Mirando la documentación de
 'rand.fun', vamos a pedir un número entero (integer).
Podemos jugar añadiendo parámetros a la URL del tipo clave=valor, siempre después de character ? 
y separados por &, por ejemplo si quisieras pedir un string con determinada longitud, la url quedaría 
así https://api.rand.fun/text/password?length=20
*/

// created password 
fetch('https://api.rand.fun/text/password?length=20')
.then(response => response.json())
.then(data=> document.body.innerHTML =data.result)

fetch('https://rand.fun/number/integer')
.then(response => response.json())
.then(data => document.body.innerHTML = data.result)