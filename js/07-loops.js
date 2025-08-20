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

    for(let j=0;j<=3;j++){
        console.log("Contador For: "+j);
        if(j==3){
            console.log("\n");
        }
    }

    console.log("Loop regressivo");
    
    for(let j=3;j>=0;j--){
        console.log("regressivo: "+j);
    }

    console.log("\nLoops e Array");

    const bandas = [ 
    "Led Zeppelin",
    "Nirvana",
    "Pink Floyd",
    "Red Hot Chili Peppers",
    "Foo Fighters",
    "Metallica",
    "AC/DC",
    "Pearl Jam",
    "The Rolling Stones",
    "Black Sabbath"
];

for(let j=0;j<bandas.length;j++){
    console.log(`Banda ${j+1}: ${bandas[j]}`);
    
}

//Loop for/of (Exclusivo JavaScript)

/*
    
    Usamos uma var/const (no caso,banda) para acessar cada elemento do array (no caso, bandas)

 */

console.log("\n----------------Loop for/of----------------\n");

for(const banda of bandas){
    console.log(banda);
}


    
    