let nome = document.getElementById('name-text')

let p = document.querySelector('p')

let user = [
    {
        nom: 'renan',
        tel: '(21) 97394-4958',
    },

    {
        nom: 'carlos',
        tel: "(21) 98948-7756",
    },

    {
        nom: 'clarisse',
        tel: "(21) 99866-1234",
    },

    {
        nom: 'yudi',
        tel: "4002-8922",
    },

    {
        nom: 'Adilson',
        tel: "(11) 98766-4432",
    },
]



function procurar() {
    for (const contact of user) {

        if (nome.value.toLowerCase() == contact.nom.toLocaleLowerCase()) {
            p.innerHTML = `Nome: ${contact.nom} e telefone: ${contact.tel}`
            nome.value = ''

            break

        } else {
            p.innerHTML = `<strong> Contato não encontrado </strong>`
        }

    }
}


