//DECLARAR ARRAY

// Crea una variable con un array vacío
const arr1 = [];

// Crea un array con dos números
const arr2 = [1, 2];

// Crea un array con cuatro datos
const arr3 = [
  'Laura',
  'Pedro',
  'Marta',
  'Diego'
];

//OBTENER INFO DE ARRAY

const fruits = [
    'pera', 
    'manzana', 
    'naranja', 
    'plátano'
  ];
  console.log(fruits); // Muestra el array completo: 'pera', 'manzana', 'naranja', 'plátano'
  console.log(fruits[1]); // Muestra 'manzana' (recordemos que el primer índice es 0)
  console.log(fruits[3]); // Muestra 'plátano'

  //AÑADIR ELEMENTO

  const arr = []; // Creamos un array vacío
arr[0] = 'Hola'; // Añadimos un elemento en el índice 0, la primera posición del array
arr[1] = '¿qué tal?'; // Añadimos un elemento en el índice 1, la segunda posición del array

// Tras los pasos anteriores arr será igual a  ['Hola', '¿qué tal?']

//MODIFICAR VALOR

const arr = [
    'plátano', 
    'manzana', 
    'pera'
  ]; // Creamos un array con tres elementos
  arr[1] = 'limón'; // Sobrescribimos el valor que hay en la segunda posición del array
  
  // Tras los pasos anteriores arr será igual a  ['plátano', 'limón', 'pera']