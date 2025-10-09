const rock = 1
const paper = 2
const scissors = 3

const max = 0;
const min = 4;

const num = Math.floor(Math.random()*(max - min + 1)) + min;

let MyNumber = 3


if (MyNumber == num) {
    console.log('empate')
} else if (MyNumber == rock && num == paper) {
    console.log(' você escolheu pedra e máquina papel. a maquina ganhou')
}  else if (MyNumber == rock && num == scissors) {
    console.log('você escolheu pedra e a máquina tesoura. você ganhou')
}  else if (MyNumber == paper && num == rock) {
    console.log('você escolheu papel e a máquina pedra. você ganhou')
}  else if (MyNumber == paper && num == scissors) {
    console.log('você escolheu papel e a máquina tesoura. a maquina ganhou')
}  else if (MyNumber == scissors && num == paper) {
    console.log('você escolheu tesoura e a máquina papel. você ganhou')
}  else if (MyNumber == scissors && num == rock) {
    console.log('você escolheu tesoura e a máuina pedra. a maquina ganhou')
}






