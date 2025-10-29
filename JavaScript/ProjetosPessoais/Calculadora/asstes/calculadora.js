let result = document.getElementById('result')
let calc = document.getElementById('calc')

function insert(n) {
    console.log(n)
    calc.value += n

}

function percent() {
    let n1 = calc.value/100
    calc.value = n1
    
}

function squad() {
    let n1 = calc.value.replace(/[()]/g,'')
    let n2 = Math.sqrt(n1,2)
    calc.value = n2
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

