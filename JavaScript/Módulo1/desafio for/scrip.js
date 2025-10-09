/*

carcular descontos:

Todos os produtos a cima de R$ 30,00 tem desconto de 10%

*/


let cart = [10,20,40,80,100,30]

let valorInicial = 0

function ValoComDesconto(price,desconto) {
    let novoValor = (price*desconto)/100
    return novoValor
}

cart.forEach((itens) => {
    if (itens >= 30) {
        valorInicial += itens -ValoComDesconto(itens,10)
    } else {
        valorInicial += itens
    }

});

console.log(valorInicial)












