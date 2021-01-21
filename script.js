/**
 * Ejercicio #3:
 * Usando querySelector y querySelectorAll
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas
 *
 * NOTA: no se puede modificar el codigo HTML de la pagina
 */

/*
  EJERCICIO A: --------------------------------------------
  
  Selecciona y console.log el <h3> que dice "Esto
  es una lista"
*/
const elemento1 = document.querySelector('h3');
console.log('H3: ', elemento1);
/*
  EJERCICIO B: --------------------------------------------
  
  Selecciona y loguea el primer y el ultimo elemento
  de la lista
*/
const primerHijo = document.querySelector('li:first-child');
const segundoHijo = document.querySelector('li:last-child');
console.log('Primer Hijo: ', primerHijo, 'Segundo Hijo: ', segundoHijo);
/*
  EJERCICIO C: --------------------------------------------
  
  Selecciona y loguea el input de tipo "email" del
  formulario
*/
const email = document.querySelector('input[type="email"]');
console.log('Input del Email: ', email);
/*
  EJERCICIO D: --------------------------------------------
  
  Selecciona y loguea la fila de la tabla que tiene "JavaScript"
*/
const jsText = document.querySelector('table tr:nth-child(3)');
console.log('Js: ', jsText);
/*
  EJERCICIO E: --------------------------------------------
  
  Selecciona y loguea la celda que dice CSS
*/
const cssText = document.querySelector('table tr:nth-child(4)');
console.log('Css: ', cssText);
/*
  EJERCICIO F: --------------------------------------------
  
  Investiga un metodo de algun elemento y trae un ejemplo de
  para que lo usarias
*/
