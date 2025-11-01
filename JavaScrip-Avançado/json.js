
const user =  {
    name: 'renan alfenas',
    idade: 27,
    endereço: 'rua pedro ernesto',
    numero: 509
}

const dados = require('./user.json');

for (i = 0; i<dados.length; i++) {
console.log(`olá ${dados[i].name} você mora em ${dados[i].adress} e atualmente tem ${dados[i].idade} anos!`)
}