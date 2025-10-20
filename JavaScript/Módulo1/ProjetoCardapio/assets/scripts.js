function MostrarTudo() {
    if (section.children.length === 0) {

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
        p.innerHTML = `R$ ${item.price},00`
        div.appendChild(p);
   
    });
} else {
    alert('já está com todos os itens a mostra')
}
}


function desconto() {
    const desc = menuOptions.map (newPrice => newPrice = newPrice.price - (newPrice.price/10))
            menuOptions.forEach(item => {

                let c = 0
                c++

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
        p.innerHTML = desc[c]
        div.appendChild(p);
   
    });

}