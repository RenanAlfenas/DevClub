





/*



let PaisDeOrigem = document.getElementById('PaisDeOrigem')

let PaisAlvo = document.getElementById('PaisAlvo')

let MoedaDeOrigem = document.getElementById('MoedaDeOrigem')

let MoedaDoPaisDeOrigem = document.getElementById('MoedaDoPaisDeOrigem')

let MoedaDoPaisAlvo = document.getElementById('MoedaDoPaisAlvo')

let Valor1 = document.getElementById('Valor1')

let Valor2 = document.getElementById('Valor2')

let div1 = document.getElementById('img1')

let div2 = document.getElementById('img2')

let div = document.getElementById('resultado')





function clicar() {
    let Moeda = Number(MoedaDeOrigem.value);

    let img1 = document.createElement('img')
    img1.id = "BandeiraPaisDeOrigem"

    let img2 = document.createElement('img')
    img2.id = "BnadeiraPaisAlvo"

    if (Moeda == "") {
        alert('Digite um valor para converter!')
    } else if (PaisDeOrigem.value == PaisAlvo.value) {
        alert('Os países precisam ser diferente')
    } else if (PaisDeOrigem.value == 'BRL' && PaisAlvo.value == 'EUA') {
        let divisao = Moeda / 5.32

        let format = divisao.toFixed(2);

        img1.src = "imagens/brasil.jpg"

        div1.appendChild(img1)

        MoedaDoPaisDeOrigem.textContent = 'Real brasileiro'

        Valor1.textContent = `R$ ${MoedaDeOrigem.value}`





        img2.src = "imagens/eua.png"

        div2.appendChild(img2)

        MoedaDoPaisAlvo.textContent = 'Dólar Americano'

        Valor2.textContent = `$ ${format}`

        MoedaDeOrigem.value = ""

        div.style.border = '2px solid black'
        

        
  
    }
}

*/

let valor = [
    {
        pais: 'BRL',
        bandeira: 'imagens/brasil.jpg',
        nome: 'Real brasileiro',
        moeda: 'R$',
        ValorMoeda: 1,
    },

    {
        pais: 'EUA',
        bandeira: 'imagens/eua.png',
        nome: 'Dólar Americano',
        moeda: '$',
        ValorMoeda: 5.32,
    },

    {
        pais: 'EUR',
        bandeira: 'imagens/inglaterra.png',
        nome: 'Euro',
        moeda: '€', 
        ValorMoeda: 6.25,
    }
]


let PaisDeOrigem = document.getElementById('PaisDeOrigem')

let PaisAlvo = document.getElementById('PaisAlvo')

let MoedaDeOrigem = document.getElementById('MoedaDeOrigem')

let contador = 0

let contadorAlvo = 0

let MoedaDoPaisDeOrigem = document.getElementById('MoedaDoPaisDeOrigem')

let div1 = document.getElementById('img1')

let Valor1 = document.getElementById('Valor1')




let MoedaDoPaisAlvo = document.getElementById('MoedaDoPaisAlvo')

let div2 = document.getElementById('img2')

let Valor2 = document.getElementById('Valor2')

function clicar() {
    if (PaisDeOrigem.value == PaisAlvo.value) {
        alert('os paises precisam ser diferente')
    } else if (MoedaDeOrigem.value == "") {
        alert('digite um valor')
    } else {
        let MoedaNova = Number(MoedaDeOrigem.value)

        
        /* RESOLVENDO A INSERÇÃO DA MOEDA DE ORIGEM */


        if (PaisDeOrigem.value == 'BRL') {
             contador = 0;
            
        } else if (PaisDeOrigem.value == 'EUA') {
             contador = 1;

        } else if (PaisDeOrigem.value == 'EUR') {
            contador = 2;
            
        }


        let img1 = document.createElement('img')
        img1.src = valor[contador].bandeira
        img1.id = 'BandeiraPaisDeOrigem'
        div1.appendChild(img1)

        MoedaDoPaisDeOrigem.textContent = valor[contador].nome

        Valor1.textContent =  new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(MoedaDeOrigem.value)              //`${valor[contador].moeda} ${MoedaDeOrigem.value}`

        /* RESOLVENDO A INSERÇÃO DA MOEDA DE CONVERSÃO */

        if (PaisAlvo.value == 'BRL') {
             contadorAlvo = 0;
            
        } else if (PaisAlvo.value == 'EUA') {
             contadorAlvo = 1;

        } else if (PaisAlvo.value == 'EUR') {
            contadorAlvo = 2;
            
        }

        let img2 = document.createElement('img')
        img2.src = valor[contadorAlvo].bandeira
        img2.id = 'BnadeiraPaisAlvo'
        div2.appendChild(img2)


        MoedaDoPaisAlvo.textContent = valor[contadorAlvo].nome
        
        

        let cont =(MoedaDeOrigem.value) / (valor[contadorAlvo].ValorMoeda)

        Valor2.textContent = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format( MoedaDeOrigem.value/valor[contadorAlvo].ValorMoeda) 
    

        

        

    } 
    
}