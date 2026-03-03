let lista = document.getElementById('colorList')
let but = document.querySelector('button')


but.addEventListener("click", function(){

        document.body.style.backgroundColor = `${lista.value}`
    
})

