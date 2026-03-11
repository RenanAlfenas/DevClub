const cart = [
    {item: 'maçã', price: 5.30},
    {item: 'trakinas', price: 2.30},
    {item: 'leite italac', price: 6},
    {item: 'barra de chocolate', price: 10},
    {item: 'alcatra', price: 50},
]


const descount = cart.map(itens => {
    
    let verif

    if(itens.item == 'maçã' || itens.item == 'trakinas') {
        verif = itens.price.toFixed(2) - (itens.price.toFixed(2) * 0.2)
    } else {
        verif = itens.price
    }

    const decountPrice = {
        item: itens.item,
        price: verif
    }

    return decountPrice
})

console.log(descount)

const finalPrice = descount.reduce((acc,itens) => {
    return acc + itens.price
},0)

console.log(finalPrice.toFixed(2))

