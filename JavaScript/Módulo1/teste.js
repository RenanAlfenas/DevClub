const user = [{
    Nome: 'RENAN',
    Idade: 26,
    Endereco: 'rua pedro ernesto',
    Numero: 463,
    EstadoCivil: null,
},

{
  Nome: 'Patrik',
    Idade: 20,
    Endereco: 'rua pedro ernesto',
    Numero: 463,
    EstadoCivil: 'solteiro',  
},

{
    Nome: 'Clarisse',
    Idade: 29,
    Endereco: 'rua araribóia',
    Numero: 420,
    EstadoCivil: 'casada',
}
]

let ChecarNome = user[2].Nome

if(ChecarNome == 'Clarisse') {
    console.log('olá clarisse, seja muito bem vinda!')
} else {
    console.log('usuário não identificado!')
}