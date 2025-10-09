let adress = [
    {
    name: 'renan',
    number: 463,
    },

    {
    name: 'clarisse',
    number: 420,
    },

    {
    name: 'patrik',
    number: 463,
    },

    {
    name: 'roberto',
    number: 730,
    },
]

let find = (FindName,FindNumber) => {
    
    return  `olá ${FindName}! você mora no número ${FindNumber}`
}

let i = 3

if (i < adress.length) {

console.log(find(adress[i].name , adress[i].number))

} else {
    console.log('pessoa não encontrada.')
}