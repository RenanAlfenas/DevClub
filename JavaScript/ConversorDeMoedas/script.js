

// variáveis do array
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
    },

    {
        pais: 'JPY',
        bandeira: 'imagens/japao.jpg',
        nome: 'iene',
        moeda: '¥',
        ValorMoeda: 0.036,
    }
]

// variávies globais (chamando elementos do HTML)

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


// função clicar

function clicar() {

    // checando se os paises são diferentes e se o valor de conversão foi digitado

    if (PaisDeOrigem.value == PaisAlvo.value) {
        alert('os paises precisam ser diferente')
    } else if (MoedaDeOrigem.value == "") {
        alert('digite um valor')
    } else {
        let MoedaNova = Number(MoedaDeOrigem.value)

        
/* ----------------------- RESOLVENDO A INSERÇÃO DA MOEDA DE ORIGEM -------------------------------- */

            // contador para ajudar a pesquisar as variavies no meu array
        if (PaisDeOrigem.value == 'BRL') {
             contador = 0;
            
        } else if (PaisDeOrigem.value == 'EUA') {
             contador = 1;

        } else if (PaisDeOrigem.value == 'EUR') {
            contador = 2;
            
        } else if (PaisDeOrigem.value == 'JPY') {
            contador = 3;
        }

            // criação dinamica da imagem da moeda de origem
      
        let img1 = document.getElementById('BandeiraPaisDeOrigem')

            if (div1.innerHTML === '') {
        
            let img1 = document.createElement('img')
            img1.src = valor[contador].bandeira
            img1.id = 'BandeiraPaisDeOrigem'
            div1.appendChild(img1)
            } else {
                img1.src = valor[contador].bandeira
            
            }

        MoedaDoPaisDeOrigem.textContent = valor[contador].nome  // criação dinamica do nome da moeda

            // criação dinamica do valor da moeda formatada para real
                    if (PaisDeOrigem.value == 'BRL') {
                    Valor1.textContent =  new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format(MoedaDeOrigem.value)    // formatação para real

                    } else if (PaisDeOrigem.value == 'EUA') {
                    Valor1.textContent =  new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(MoedaDeOrigem.value)    // formatação para dólar

                    } else if (PaisDeOrigem.value == 'EUR') {
                        Valor1.textContent =  new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'EUR',
                    }).format(MoedaDeOrigem.value)     // formatação para euro

                    } else if (PaisDeOrigem.value == 'JPY') {
                        Valor1.textContent =  new Intl.NumberFormat('ja-JP', {
                        style: 'currency',
                        currency: 'JPY',
                    }).format(MoedaDeOrigem.value)     // formatação para iene
                    }
/* ----------------------- RESOLVENDO A INSERÇÃO DA MOEDA DE CONVERSÃO ------------------------------------- */

            // contador para ajudar a pesquisar as variavies no meu array
        if (PaisAlvo.value == 'BRL') {
             contadorAlvo = 0;
            
        } else if (PaisAlvo.value == 'EUA') {
             contadorAlvo = 1;

        } else if (PaisAlvo.value == 'EUR') {
            contadorAlvo = 2;
            
        } else if (PaisAlvo.value == 'JPY') {
            contadorAlvo = 3;
        }

            // criação dinamica da imagem da moeda de convertida

        let img2 = document.getElementById('BnadeiraPaisAlvo')

                    if (div2.innerHTML === '') {
                    let img2 = document.createElement('img')
                    img2.src = valor[contadorAlvo].bandeira
                    img2.id = 'BnadeiraPaisAlvo'
                    div2.appendChild(img2)
                    } else {
                        img2.src = valor[contadorAlvo].bandeira
                    }


        MoedaDoPaisAlvo.textContent = valor[contadorAlvo].nome  // criação dinamica do nome da moeda convertida
        
         // criação dinamica do valor da moeda convertida formatada para a moeda selecionada


        if (PaisAlvo.value == 'EUA'){
        Valor2.textContent =  new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format( MoedaDeOrigem.value*(valor[contador].ValorMoeda/valor[contadorAlvo].ValorMoeda))  // formatação para dólar

        } else if (PaisAlvo.value == 'EUR') {
            Valor2.textContent =  new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'EUR',
        }).format( MoedaDeOrigem.value*(valor[contador].ValorMoeda/valor[contadorAlvo].ValorMoeda)) // formatação para euro

        } else if (PaisAlvo.value == 'JPY') {
            Valor2.textContent =  new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
        }).format( MoedaDeOrigem.value*(valor[contador].ValorMoeda/valor[contadorAlvo].ValorMoeda)) // formatação para iene

        } else if (PaisAlvo.value == 'BRL') {
            Valor2.textContent =  new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format( MoedaDeOrigem.value*(valor[contador].ValorMoeda/valor[contadorAlvo].ValorMoeda)) // formatação para real
        }

        
        
        

    } 
    
}