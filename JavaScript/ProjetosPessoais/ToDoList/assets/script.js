let inputText = document.getElementById('text')

let add = document.getElementById('add')

let list = document.getElementById('tasks')

let completButton = document.getElementsByClassName('complet')

let ul = document.getElementById('tasks')


function addTaskButton() {
    if(inputText.value != "") {
    
    list.innerHTML += `
        <li>
        
                <p>${inputText.value}</p>
        
                <span>
                    <button class="delet" onclick = "deletButton(this)">Excluir</button>
                    <button class="edit">Editar</button>
                    <button class="completButton" onclick = "CompletTask(this)">Concluido</button>
                </span>
        
            </li>
    `

    inputText.value = ""
    }
}

inputText.addEventListener('keydown' , function(e) {
    if(e.key === 'Enter') {
        addTaskButton()
    }
})

function CompletTask(button) {
    let p = button.closest('li').querySelector('p')
    p.classList.toggle('complet')
    
}

function deletButton(button) {
    let li = button.closest('li')
    li.remove()
}




