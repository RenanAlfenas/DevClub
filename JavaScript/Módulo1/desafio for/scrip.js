/*

carcular descontos:

Todos os produtos a cima de R$ 30,00 tem desconto de 10%

*/

let cart = [
    { valor: 80 },
    { valor: 20 },
    { valor: 10 },
   
]

let valorInicial = 0

function MeuDesconto(preco,desconto) {     // essa função serve para calcular o desconto dos itens e retornar o valor a variável desc.
    let desc = (preco*desconto)/100
    return desc
}

cart.forEach(itens => {
    
    if (itens.valor > 30) {
        valorInicial = valorInicial + (itens.valor - MeuDesconto(itens.valor,10))  // essa linha serve para somar os valores que tem desconto 
    } else {
        valorInicial += itens.valor   // essa linha serve para somar os valores que não tem  desconto e ai soma todos os valores do meu array
    }

});


console.log(valorInicial)










