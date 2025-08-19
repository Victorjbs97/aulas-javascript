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

*/
