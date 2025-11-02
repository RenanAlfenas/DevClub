const convert = async () => {
    const data = await fetch("http://localhost:3000/usuarios").then(res => res.json())
    return data
    
}

async function mains() {
    const data = await convert()
    const dolar = data[2].name;

    console.log(dolar)

   
}

mains()