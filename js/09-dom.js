'use strict';

/* Exemplo 01 */

//Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 =  document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);

// querySelectorAll para selecionar todos os elementos.
//NodeList

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);
