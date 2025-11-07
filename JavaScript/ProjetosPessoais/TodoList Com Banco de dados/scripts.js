const text = document.getElementById('text')
const divTask = document.getElementById('tasks')
const add = document.getElementById('add')


function addButton() {

    divTask.innerHTML += `
        <p>
            ${text.value}
            
            <span>
                <button class="complete" onclick = 'complete(this)'>concluida</button>
                <button class="edit" onclick = 'edit(this)'>editar</button>
                <button class="delet">excluir</button>
            </span>
        
        </p>
    `

    text.value = ""
}

text.addEventListener('keypress',function(event) {
    if(event.key === 'Enter') {
        addButton()
    }
})

function complete(button) {
    button.closest('p').classList.toggle('completedTask')
}

function edit(button) {
    let textEdited = prompt('edite seu texto')
    button.closest('p').text.value.innerHTML = textEdited
}