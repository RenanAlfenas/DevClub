const cart = [
    {productName: 'Abóbora', valuePerkg: 5, kg: 1 },
    {productName: 'Pepipo', valuePerkg: 3.55, kg: 1.3 },
    {productName: 'Limão', valuePerkg: 1.2, kg: 2 },
    {productName: 'Abacate', valuePerkg: 5.4, kg: 1.67 },
    {productName: 'Morango', valuePerkg: 11.9, kg: 3 },
]



let total = cart.reduce((acc, value) => {
    return acc + (value.valuePerkg * value.kg)
},0)

console.log(`R$ ${total.toFixed(2)}`)