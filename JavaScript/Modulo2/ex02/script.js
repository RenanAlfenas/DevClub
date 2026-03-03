let moeda1 = document.getElementById('moeda1Value')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let botao = document.querySelector('button')
let selectPais1 = document.getElementById('country1')
let selectPais2 = document.getElementById('country2')

let h3 = document.querySelector('h3')

let valorMoedas = [
    {
        spence: 'BRL',
        valor: 1,
    },

    {
        spence: 'USD',
        valor: 0.19,
    },

    {
        spence: 'EUR',
        valor: 0.16,
    },

    {
        spence: 'JPY',
        valor: 29.26,
    },
]

selectPais1.addEventListener('change', function(){
    img1.src = `imagens/${selectPais1.value}.png`
})

selectPais2.addEventListener('change', function(){
    img2.src = `imagens/${selectPais2.value}.png`
})


botao.addEventListener('click', function(){

    let m1 = Number(moeda1.value)
    
    let c1 = valorMoedas.findIndex(user => user.spence == selectPais2.value)

    let convertedSpence = (m1 * valorMoedas[c1].valor)

    h3.innerHTML = convertedSpence
})


