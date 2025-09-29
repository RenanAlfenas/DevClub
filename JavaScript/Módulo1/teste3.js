let texto = window.document.getElementById('texto')

let titulo = document.querySelector('h1')

function estilo() {
    titulo.innerHTML = texto.value
}

texto.addEventListener('input', estilo)

let clique = document.getElementById('botao')

function completo() {
    titulo.style.textDecoration = 'line-through'
    titulo.style.color = 'grey'
}

clique.addEventListener('click', completo)

function voltar() {
    titulo.style.textDecoration = 'none'
    titulo.style.color = 'black'
}


clique.addEventListener('dblclick', voltar)