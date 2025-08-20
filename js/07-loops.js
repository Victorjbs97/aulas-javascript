'use strict';
    /*
        Loops ou estruturas de repetição
        
        São comandos que, baseados em alguma condição lógica, são progrmas para executar ações repetidas vezes.

        Comandos maais tradicionais: while e for.

        Normalmente, os loops são controlados através de uma variável contadora
     */    
    

    console.log("Estrutura While\n");   

    let i=0;

    while(i<=2 ){
        console.log("Valor do contador: "+i);
        i++;
        if(i==3){
            console.log("\n")
        }
    }

    console.log("Loop for");

    for(let j=0;j<=5;j++){
        console.log("Contador For: "+j);
        if(j==5){
            console.log("\n");
        }
    }

    console.log("Loop regressivo");
    
    for(let j=10;j>=0;j--){
        console.log("regressivo: "+j);
    }

    