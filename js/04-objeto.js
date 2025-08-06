'use strict';
/// Exemplo 1: Objetos com dados de uma pessoa

console.log("Texte\n");


const pessoa = {
    nome:'chaves',
    idade:8,
    cidade:'São Paulo',
    estado:'SP'
};
console.clear()
///Acessando as propreidades do objeto
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos.`);


///Exemplo 2: Objeto com array

const livros = {
    titulo: "O senhor dos anéis",
    autor:"J.R.R. Tolkien",
    volume:[
        "A sociedade do anel",
        "As duas Torres",
        "O retorno do Rei"
    ]
}

/* Para acessar alguns dos volumes, primeiro passamos pela propriedade(volumes) usando ponto e, chegando nela, usamos os colchetes com indece pois se trata de um array*/
console.log(livros);
console.log(livros.volume[1]);

const livro = [
    {
        titulo:"O assassinato no expresso do oriente",
        autor:"Agatha Christie"
    },
    {
        titulo:"Crepúsculo",
        autor:"Stephanie Myers"
    },
    {
        titulo:"A origem das especies",
        autor:"Charles Darwin"
    }
];
console.log(livro[2].autor);
console.clear();

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

const aluno={
    nomeCompleto: "Harry Poter",
    dataNscimento:"05/01/1985",
    listaTelefones:[    
        "(55) 1464-6585",
        "(55) 91234-5678"
    ],
    endereco:{
        rua:"Rua da Casa dos poters",
        numero:"555",
        bairo:"Jardim dos magos"
    }
}

console.log(`O aluno ${aluno.nomeCompleto} tem o número de telefone celular ${aluno.listaTelefones[1]} e mora no bairro ${aluno.endereco.bairo}.`);




