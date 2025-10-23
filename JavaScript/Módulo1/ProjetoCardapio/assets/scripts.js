function MostrarTudo() {
        descontoAtivo = false;
        section.innerHTML = ""


        menuOptions.forEach(item => {

        let div = document.createElement('div')
        div.id = `${item.name}`
        section.appendChild(div);
        
        let img = document.createElement('img')
        img.src = `${item.src}`
        div.appendChild(img);

        let h1 = document.createElement('h1')
        h1.innerText = item.name
        div.appendChild(h1);

        let p = document.createElement('p')
        p.classList.add('element')
        p.innerHTML = `R$ ${item.price.toFixed(2).replace('.',',')}`
        div.appendChild(p);

        
      
})
}



function desconto() {
        descontoAtivo = true;
        section.innerHTML = ""

            menuOptions.map ((NewPrice) => {

            let novoPreco = NewPrice.price - (NewPrice.price/10)

            let div = document.createElement('div')
                div.id = `${NewPrice.name}`
                section.appendChild(div);
        
            let img = document.createElement('img')
                img.src = `${NewPrice.src}`
                div.appendChild(img);

            let h1 = document.createElement('h1')
                h1.innerText = NewPrice.name
                div.appendChild(h1);

            let p = document.createElement('p')
                p.classList.add('element')
                p.innerHTML = `R$ ${novoPreco.toFixed(2).replace('.',',')}`
                div.appendChild(p);
                
        } 
)


}

function sum() {
    
    let soma = menuOptions.reduce((acum,item) => {
        if(descontoAtivo) {
        return acum + (item.price - item.price / 10)
        } else {
            return acum + item.price
        }
    },0)

    
    section.innerHTML = ""
    
    let div = document.createElement('div')
        div.id = 'texto'
        section.appendChild(div);
    
    let h1 = document.createElement('h1')
        h1.innerHTML = 'o valor do cardápio total é: '
        div.appendChild(h1);

    let p = document.createElement('p')
        p.innerHTML = `R$ ${soma.toFixed(2).replace('.',',')}`
        div.appendChild(p)   
}


function filter() {
    let filtro = menuOptions.filter( validation => {
        if (validation.vegan == true) {
            return true
        } else {
            return false
        }
    })

    
    section.innerHTML = ""

    for (let i = 0; i < filtro.length; i++) {
        
        let div = document.createElement('div')
        div.id = `${filtro[i].name}`
        section.appendChild(div);
        
        let img = document.createElement('img')
        img.src = `${filtro[i].src}`
        div.appendChild(img);

        let h1 = document.createElement('h1')
        h1.innerText = filtro[i].name
        div.appendChild(h1);

        let p = document.createElement('p')
        p.classList.add('element')
        p.innerHTML = `R$ ${filtro[i].price.toFixed(2).replace('.',',')}`
        div.appendChild(p);
        
    }

}
