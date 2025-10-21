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
        p.classList.add('element')
        p.innerHTML = item.price
        div.appendChild(p);

        
      
   
    });
} else {
    alert('já está com todos os itens a mostra')
}
}


function desconto() {
            menuOptions.map ((NewPrice,index) => {

               const novoPreco = NewPrice.price - (NewPrice.price/10)

                    let p = document.querySelectorAll('.element')

                    p[index].textContent = novoPreco;

        } 
) 

}
