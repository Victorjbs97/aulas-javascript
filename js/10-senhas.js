'use strict';


const campoSenha = document.querySelector("#senha");
const botaomostrar = document.querySelector("#mostrar");

botaomostrar.addEventListener("pointerdown", function(){
    campoSenha.type = "text";
});

botaomostrar.addEventListener("pointerup", function(){
    campoSenha.type =  "password";
});
botaomostrar.addEventListener("pointerleave", function(){
    campoSenha.type =  "password";
});
