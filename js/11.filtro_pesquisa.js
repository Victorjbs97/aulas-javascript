'use strict';

// Seleciona o id buscar que é um input no search no html
const campoBusca = document.querySelector("#busca");
// Seleciona o item
const clientes = document.querySelectorAll("#clientes li");
const escondeLista = document.querySelector("#clientes");

escondeLista.style.display = "none";

campoBusca.addEventListener("input",function (){
    const ternoDigitado = campoBusca.value.toLowerCase();

    for(const cliente of clientes){
        //Se nome do cliente incluir algum caracterer digitado.
        escondeLista.style.display = "block";
        if(cliente.textContent.toLowerCase().includes(ternoDigitado)){
            cliente.style.display = "list-item";
        }else{
            cliente.style.display = "none";
        }
    }
});