'use strict';

    /*
        Funções são blocos de código responsáveis por executardeterminadas tarefas.
        Para esses blocos/funções, é nescesário "chamar/invocar" a função desejada através do seu nome.
        
        Vantagens:
        - Reutilização de código;
        - Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades;
        -Melhor perfomance;
        -Maior facilidade para manuntenção.

        No JS, existem várias maneiras de se criar uma função: função anônima, função nomeada/declarada, e arrow function.

    */

    console.log("Exemplo 1: função anônima! ");

    const exemplo1 = function(){
        /* Corpo da função:  o que vai fazer a função */
        
        console.log("Olá função anônima");
        
    };

    exemplo1();


    console.log("\nFunção Nomeada/Declarada");
    
    exemplo2();
    function exemplo2(){
        console.log("Essa é a função nomeada");
    }

    console.log("\nExemplo 3: Arrow function");

    /* Sintaxe potencialmente mais simples para funções no JS */

    const exemplo3 = () => {
        console.log("Sintaxe Arrow Function!")
    };

    exemplo3();

    /* Obs: Funções (wm qualquer sintaxe) também podem trabalhar com parâmetros/argumentos.

        Quando uma função precisa de valores/dados para algum tipo de processamento, ela recebe valores/dados através de parâmetros/argumentos entre parênteses.

        Geralmente, ao terminar o processamento dos dados, a função "retorna" para fora um resultado.

    */

    saudacao("João");
    saudacao();


    function saudacao(nome = "Visitante"){
        console.log("Olá, "+nome+"!");
    }

    function multiplicador(valor1,valor2){
        return valor1*valor2;
        
    }

    console.log('resultado: '+multiplicador(10,10));


    /*
         
     */