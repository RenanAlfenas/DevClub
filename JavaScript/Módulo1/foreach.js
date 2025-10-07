let user = [
    {
        nome: 'renan',
        carro: 'BMW',
    },

    {
        nome: 'carlos',
        carro: 'sedan',
    },

    {
        nome: 'clarisse',
        carro: 'fiat',
    },
]


let pesquisa = 'carlos'

user.forEach((i) => {
    if(pesquisa == i.nome) {
    console.log(`${i.nome}, seu carro é um(a) ${i.carro}.`)

    } else {
        console.log('nao achei')
    }
    
});



