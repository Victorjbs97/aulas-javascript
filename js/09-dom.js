'use strict';

/* Exemplo 01 */

//Procurando (querySelector) por um elemento chamado exemplo1
const exemplo01 =  document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");

// querySelectorAll para selecionar todos os elementos.
//NodeList

const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

/*
    Eventos é um acontecimento ou fenômeno que, quando acontece, dispara ações em nosso programa/site/aplicação.

    O JS suporta centenas de tipos de evento. Exemplos.:
    - Click do mouse;
    - pressionar teclas;
    - Tocar na tela;
    - rolagem da página;
    - Carregamento da página e etc.
 */

// Exemplo detectando eventos

//Ao click no exemplo01, vai colocar uma mensagem "Vasco!" no html
exemplo01.addEventListener("click", function(){
    mensagem01.textContent = "Vasco!";
    // adiciona uma classe na mensagem
    mensagem01.classList.add("destaque");
});

//Ao click 2x na mensagem("Vasco!"), a mensagem sai.
mensagem01.addEventListener("dblclick", function(){
    mensagem01.textContent="";
    // remove uma classe na mensagem
    mensagem01.classList.remove("destaque");
});


//    Exercicios 
//    1) Crie uma nova constante e selecione o h1 da página

const titulo = document.querySelector("h1");

//    2) Crie um evento que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralização.

titulo.addEventListener("mouseover", function(){
    titulo.textContent="Praticando Eventos!";
    titulo.classList.add("praticandoH1");
});

//    3) Faça também um evento que de click para que, quando clicar na palavra "referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda(Padrão). 
    
const refVoltar = document.querySelector("h2:last-of-type");
refVoltar.addEventListener("mousedown",function(){
    titulo.classList.remove("praticandoH1");
    titulo.textContent = "Eventos";
});
