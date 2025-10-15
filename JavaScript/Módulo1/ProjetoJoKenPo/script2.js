let options = ['rock', 'paper','scissors']
let result = document.getElementById('resposta')
let MeuPonto = document.getElementById('MeuPonto')
let PontoMaquina = document.getElementById('PontoMaquina')

let MachinePointNumber = 0
let HumamPointNumber = 0

let PlayHumam = (choiseHumam) => {
    Game(choiseHumam,PlayMachine())
}

let PlayMachine = () => {
    let choiseMachine = Math.floor(Math.random() * 3) 

    return options[choiseMachine]
    
}

let Game = (humam,machine) => {
    console.log(`o humano escolheu ${humam} e a máquina escolheu ${machine}`)
    
    if (humam ==  machine) {
        result.innerHTML = 'empate!'
    } else if ((humam == 'rock' && machine == 'scissors') || (humam == 'paper' && machine == 'rock') || (humam == 'scissors' && machine == 'paper')) {
        result.innerHTML = 'Você venceu!' 
        HumamPointNumber++
        MeuPonto.innerHTML = HumamPointNumber
    } else {
        result.innerHTML = 'a máquina venceu!'
        MachinePointNumber++
        PontoMaquina.innerHTML = MachinePointNumber
    } 

}