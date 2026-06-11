const botao = document.querySelector("button")
botao.addEventListener("click", curtir)

function curtir(){
    let curtidas = document.querySelector("span")
    curtidas.textontent++;

}


//botao do tamanho
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16;

//funcao

function aumentarFonte(){
document.body.style.fontSize = fonte + "px";



}