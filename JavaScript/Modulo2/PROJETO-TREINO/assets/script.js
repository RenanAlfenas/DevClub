
const menuOptions = [

{ name: 'X-Salada', price: 30, vegan: false, src: '../imagens/xsalada.jpeg' },

{ name: 'X-Bacon', price: 34, vegan: false, src: '../imagens/xbacon.png' },

{ name: 'X-Bacon Egg', price: 39, vegan: false, src: '../imagens/bacon-egg.png' },

{ name: 'Monstruoso', price: 50, vegan: false, src: '../imagens/monstruoso.png' },

{ name: 'Big Vegano', price: 55, vegan: true, src: '../imagens/xvegan.png' },

{ name: 'X-Vegan', price: 45, vegan: true, src: '../imagens/monstruoso-vegan.png' },

]

let showButton = document.getElementById('show-all')
let mapButton = document.getElementById('mapButton')
let reduceButton = document.getElementById('reduceButton')
let menu = document.getElementById('menu')



showButton.addEventListener('click', function(){

    menu.innerHTML = ""

   menuOptions.forEach(element => {


        const div = document.createElement('div');
        div.id = 'hamburguer';

        const image = document.createElement('img')
        image.src = element.src;
        image.alt = 'imagem prato'

        const h2 = document.createElement('h2')
        h2.textContent = element.name

        const h3 = document.createElement('h3')
        h3.innerHTML = `R$ ${element.price.toFixed(2).replace('.',',')}`
        
        div.appendChild(image)
        div.appendChild(h2)
        div.appendChild(h3)
        menu.appendChild(div)
  
        
    });

})




mapButton.addEventListener('click', function(){
    menu.innerHTML = ""

    menuOptions.map(element => {
        const div = document.createElement('div');
        div.id = 'hamburguer';

        const image = document.createElement('img')
        image.src = element.src;
        image.alt = 'imagem prato'

        const h2 = document.createElement('h2')
        h2.textContent = element.name

        const h3 = document.createElement('h3')
        const price = element.price - (element.price * 0.1)
        h3.innerHTML = `R$ ${price.toFixed(2).replace('.',',')}`

        

        div.appendChild(image)
        div.appendChild(h2)
        div.appendChild(h3)
        menu.appendChild(div)
        
        return price
    })

})


reduceButton.addEventListener('click',function(){

        menu.innerHTML = ""

        const div = document.createElement('div');
        div.id = 'hamburguer';
        div.style.height = '90px'
        const h2 = document.createElement('h2')
        h2.textContent = 'O valor de todos os pratos do menu é:'
        const h3 = document.createElement('h3')

    const newPrices = menuOptions.reduce((acc,prices) => {
        return (acc + prices.price )
    },0)

    h3.innerHTML = ` R$ ${newPrices.toFixed(2).replace('.',',')}`

        div.appendChild(h2)
        div.appendChild(h3)
        menu.appendChild(div)
})


