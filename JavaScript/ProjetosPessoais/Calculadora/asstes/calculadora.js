let result = document.getElementById('result')
let calc = document.getElementById('calc')

function insert(n) {
    console.log(n)
    calc.value += n

}

function resultExpression() {
    console.log(calc.value)
    result.value = ""
    result.value = eval(calc.value)
}

function apagar() {
    result.value = ""
    calc.value = ""
}

function delet() {
    calc.value = calc.value.slice(0,-1)
}