
/*
if (fundo.value == 'blue') {
    window.document.body.style.backgroundColor = 'blue'
} else if (fundo.value == 'yellow') {
    window.document.body.style.backgroundColor = 'yellow'
} else if (fundo.value == 'pink') {
    window.document.body.style.backgroundColor = 'pink'
}
*/

let texto = window.document.getElementById('lista')

let tit = window.document.querySelector('h1')

 lista.addEventListener('input', () => {
    if(texto.value == 'azul') {
        document.body.style.backgroundColor = 'blue'
    } else if (texto.value == 'amarelo') {
        document.body.style.backgroundColor = 'yellow'
    } else if (texto.value == "") {
        document.body.style.backgroundColor = 'red'
    }
  })



