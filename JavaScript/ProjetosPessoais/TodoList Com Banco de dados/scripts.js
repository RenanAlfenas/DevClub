const text = document.getElementById('text')
const divTask = document.getElementById('tasks')
const add = document.getElementById('add')
const ul = document.getElementById('unorderList')


function addButton() {

    ul.innerHTML += `
   
            <li>
            <p>${text.value}</p>
            
            <span>
                <button class="complete" onclick = 'complete(this)'>concluida</button>
                <button class="edit" onclick = 'edit(this)'>editar</button>
                <button class="delet" onclick = 'delet(this)'>excluir</button>
            </span>
            </li>
  
    `

    text.value = ""
}

text.addEventListener('keypress',function(event) {
    if(event.key === 'Enter') {
        addButton()
    }
})

function complete(button) {
    button.closest('li').classList.toggle('completedTask')
}

function edit(button) {
    let textEdited = prompt('edite seu texto')
    if(textEdited != null) {
    button.closest('li').querySelector('p').innerHTML = textEdited
    }
}

function delet(button) {
    button.closest('li').remove()
}