/*
Average function
Create a function that receives 4 parameters, each one with a number, 
and returns the mean of all of them. Do three tests with different numbers 
to verify that it works correctly and display the result on the console
*/
'use strict';
let result;
function average(a, b, c, d) {
result = (a + b + c + d)/4;
   return result;
    }
        result = average(4, 8, 3, 2);
        console.log("el promedio es: " + result);
        result = average(1, 1, 1, 1);
        console.log("el promedio es: " + result);
        result = average(5000, 4500, 300, 2000);
        console.log("el promedio es: " + result);