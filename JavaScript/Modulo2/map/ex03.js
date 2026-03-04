const menu = [
    {plate: 'hamburguer', price: 10.50},
    {plate: 'batata frita', price: 8.99},
    {plate: 'x-burguer', price: 12},
    {plate: 'x-tudo', price: 15.50},
    {plate: 'x-ratão', price: 20},
]

const descount = menu.map(menuDescount => {
    let newPrice 

    if (menuDescount.price > 11) {
        newPrice = menuDescount.price - (menuDescount.price * 0.2)
    } else {
        newPrice = menuDescount.price
    }

    const newMenu = {
        plate: menuDescount.plate,
        priceDescount: newPrice
    }

    return newMenu
})

console.log(descount)