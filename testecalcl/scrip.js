let txt = document.getElementById("text")
let res = document.getElementById('res')
const e = 2.71828
const π = 3.14159

function press(n) {
    txt.value += n
    return txt.value
}

function calc() {
    let result = eval(txt.value)
    res.innerHTML = result
}

function reset() {
    res.innerHTML = ""
    txt.value = ""
}