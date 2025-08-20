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


    
console.log("\n----------------Loop e objeto----------------\n");

const pessoa = {
    nome:"Fulano de Tal",
    idade:40,
    cidade:"São Paulo",
    Estado:"SP"
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//for/in

for(const prop in pessoa){
    console.log(pessoa[prop]);
}
    

console.clear();



/*

Exercício: Loop com array de objetos
Geral Orientações:
 
1. Faça um array chamado "clientes" contendo 3 objetos.
 
Cada objeto deverá ter uma propriedade "identificador" (com valores 1, 2 e 3) e uma propriedade "nome" (com os nomes dos clientes: "Dio", "Ozzy" e "Ian").
 
2. Faça um loop (qualquer um dos que vimos) e mostre no console os dados de cada cliente conforme a seguir:
 
- Cliente: Dio, id: 1

- Cliente: Ozzy, id: 2

- Cliente: Ian, id: 3
 

*/

const clientes =[
    {
        nome:"Dio",
        id:1
    },
    {
        nome:"Ozzy",
        id:2
    },
    {
        nome:"Ian",
        id:3
    }
]

for(const cliente of clientes){
    //console.log("Cliente: "+cliente.nome+", id: "+ cliente.id);
    console.log(`- Cliente: ${cliente.nome}, id: ${cliente.id}`);
}
console.log("\n---------------For---------------------\n");
for(let i=0;i<clientes.length;i++){
    console.log(`- Cliente: ${clientes[i].nome}, id: ${clientes[i].id}`);
}

console.log("\n----------------While--------------------\n");

let k=0;
while(k<clientes.length){
    console.log(`- Cliente: ${clientes[k].nome}, id: ${clientes[k].id}`);
    k++;
}