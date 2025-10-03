const max = 90;
const min = 90;

if (max <= min) {
    console.log('valores não aceitos. o valor máximo tem que ser maior que o valor minimo!')
} else {

const num = Math.floor(Math.random()*(max - min + 1)) + min;

console.log(num)

}

