'use strict';

/* Comandos condicionais mais comum:

if -se

else - se não

*/

//Exemplos

console.log("exemplo");

let numero= 5;

//condicional simples

if(numero!=0){
    console.log(numero);
}

let aluno = 'Ozzy';
let idade = 18;

/* Verificar se aluno é maior ou menor de idade */

if (idade<18) {
    console.log("Menor de idade")
} else{
    console.log("Maior de Idade")
}

/*
    1. Crie duas variáveis conforme a seguir:
    
    - Nota 1 (contendo um valor de 0 a 10)
    - Nota 2 (contendo outro valor de 0 a 10)
    
    2. Crie uma variável chamada "Média" que receberá o valor CALCULADO da média das duas notas informadas. 
    DICA: você deve SOMAR as duas notas e DEPOIS dividir por 2.
    
    3. Programe uma condicional que verifique o valor da média calculada. Se a média for maior/igual a 7, mostre "aprovado". 
    Caso contrário, mostre "reprovado".
 */

    let nota1=8,nota2=6,media=(nota1+nota2)/2;

    if(media>=7){
        console.log(`Aluno aprovado! 😊 nota ${media}!!`);
    }else{
        console.log(`Aluno reprovado! 😢 nota ${media}!!`);
    }
    