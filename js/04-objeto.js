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

