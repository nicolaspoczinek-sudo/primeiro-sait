const botao = document.querySelector("button")
botao.addEventListener('click', curtir)

function curtir() {
    let curtidas = document.querySelector("span")
    curtidas.textContent++;
}


// BOTÃO DO TAMANHO
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16;

//FUNÇÃO
function aumentarFonte(){
    fonte++;
    document.body.style.fontSize = fonte + "px";
}

// BOTÃO DO CONTRASTE
const contraste = document.getElementById("contraste")
contraste.addEventListener("click", alternarContraste)

let modoContraste = false

// FUNÇÃO DO CONTRASTE
function alternarContraste() {
    if (modoContraste === false) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "yellow"
        modoContraste = true
    } else {
        document.body.style.backgroundColor = "white"
        document.body.style.color = "black"
        modoContraste = false
    }
}