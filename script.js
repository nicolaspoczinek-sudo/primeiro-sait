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

// Botão Contraste

const contraste = document.getElementById("contraste")
contraste.addEventListener("click", MudarContraste)

// Função Maneira
function MudarContraste(){
document.body.style.color = 'yellow';
}