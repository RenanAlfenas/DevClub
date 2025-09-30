





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
        moeda: 1.0,
    },

    {
        pais: 'EUA',
        bandeira: 'imagens/eua.png',
        nome: 'Dólar Americano',
        moeda: 5.31,
    },

    {
        pais: 'EUR',
        bandeira: 'imagens/inglaterra.png',
        nome: 'Euro',
        moeda: 6.23, 
    }
]


let PaisDeOrigem = document.getElementById('PaisDeOrigem')

let PaisAlvo = document.getElementById('PaisAlvo')

let MoedaDeOrigem = document.getElementById('MoedaDeOrigem')



function clicar() {
    if (PaisDeOrigem.value == PaisAlvo.value) {
        alert('os paises precisam ser diferente')
    } else if (MoedaDeOrigem.value == "") {
        alert('digite um valor')
    } else {
        let MoedaNova = Number(MoedaDeOrigem.value)

        let contador = ""

        /* RESOLVENDO A INSERÇÃO DA MOEDA DE CONVERSÃO */


        if (PaisDeOrigem.value == 'BRL') {
            let contador = 0;

            
            
        } else if (PaisDeOrigem.value == 'EUA') {
            let contador = 1;

            

        } else if (PaisDeOrigem.value == 'EUR') {
            let contador = 2;
            
            
        }


        alert(contador + 2)

        

        
        

        

       
    }
}