let inputText = document.getElementById('text')

let add = document.getElementById('add')

let list = document.getElementById('tasks')

let completButton = document.getElementsByClassName('complet')

let ul = document.getElementById('tasks')


function addTaskButton() {               // essa função serve para adicionar as tarefas na minha lista de tarefas
    if(inputText.value != "") {
    
    list.innerHTML += `
        <li>
        
                <p>${inputText.value}</p>
        
                <span>
                    <button class="delet" onclick = "deletButton(this)">Excluir</button>
                    <button class="edit" onclick = "editButton(this)">Editar</button>
                    <button class="completButton" onclick = "CompletTask(this)">Concluido</button>
                </span>
        
            </li>
    `

    inputText.value = ""
    }
}

inputText.addEventListener('keydown' , function(e) {               // essa função serve para poder adicionar a tarefa apertando ENTER ao invés de só usar o botão
    if(e.key === 'Enter') {
        addTaskButton()
    }
})

function CompletTask(button) {                                    // essa função serve para marcar a função como completa deixando ela cinza e com um risco
    let p = button.closest('li').querySelector('p')               // essa linha seleciona o <p> mais perto(closest) da minha <li> que no caso é o próprio <p> da <li>
    p.classList.toggle('complet')
    
}

function deletButton(button) {                                   // essa função serve para deletar a a tarefa deletando toda a <li>
    let li = button.closest('li')                               // essa linha pega o <li> mais perto do meu button que é o <li> onde está o button
    li.remove()
}


function editButton(button) {                                   // essa função serve para editar o valor do meu <p> usando o prompt de comando
   let editText = prompt('Edite o Texto')
    if(editText != null) {               // essa condição serve para checar se o valor do prompt está mesmo preenchido, caso não esteja, ele deixa o texto do jeito que está
    let p = button.closest('li').querySelector('p')
    p.innerHTML = editText
    }

}



