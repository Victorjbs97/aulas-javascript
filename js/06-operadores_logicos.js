'use strict';

/* 

&& ->   E                  -> AND

|| ->   OU                 -> OR

!  ->   NÃO/NEGAÇÃO        -> NOT

*/

console.log("Exemplo &&");

let idade=20,temCarta=true;

if(idade>=18&&temCarta===true){
    console.log("Pode Dirigir");
}else{
    console.log("Não pode Dirigir")
}


/* 
    Diferença entre == ou === 
    com dois ==, se comprar o valor não importa o tipo exemplo: 10 inteiro e '10' string, a comparação é positiva
    com três ===, se compara o valor e o tipo. exemplo: 10 inteiro e '10' string, a comparação é false

    0 . 0 = 0                     0 + 0 = 0             
    0 . 1 = 0                     0 + 1 = 1
    1 . 0 = 0                     1 + 0 = 1
    1 . 1 = 1                     1 + 1 = 1

    ordem de precedencia
    !
    &&
    ||
*/


console.log("\n\nExemplo ||")
let feriado = false, fimdeSemana = false;

if (feriado || fimdeSemana) {
    console.log("\nNão tem aula!");
    
} else {
    console.log("\nTem aula!");
    
}
