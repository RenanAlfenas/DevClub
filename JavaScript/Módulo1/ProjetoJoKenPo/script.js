
/* variáveis do meu HTML*/

let rock = document.getElementById('rock')

let paper = document.getElementById('paper')

let scissors = document.getElementById('scissors')

let resp = document.getElementById('resposta')

let MeuPonto = document.getElementById('MeuPonto')

let PontoMaquina = document.getElementById('PontoMáquina')

const RockNUm = 1
const PaperNum = 2
const ScissorsNum = 3

const max = 0;
const min = 4;


let MyNumber

let pontomaq = 0

let meuponto = 0




rock.addEventListener("click",function() {
     MyNumber = 1
     const num = Math.floor(Math.random()*(max - min + 1)) + min;

     if (num == RockNUm) {
    resp.innerText = 'empate'
} else if (num == PaperNum) {
    resp.innerText =  ' você escolheu pedra e máquina papel. a maquina ganhou'
    PontoMaquina.innerText = pontomaq+=1
    
}  else if (num == ScissorsNum) {
    resp.innerText = 'você escolheu pedra e a máquina tesoura. você ganhou'
    MeuPonto.innerHTML = meuponto+=1
    
}
    
    

})


paper.addEventListener("click",function() {
     MyNumber = 2
     const num = Math.floor(Math.random()*(max - min + 1)) + min;

     if (num == PaperNum) {
    resp.innerText = 'empate'
} else if (num == RockNUm) {
    resp.innerText = 'você escolheu papel e a máquina pedra. você ganhou'
    MeuPonto.innerHTML = meuponto+=1
    
} else if (num == ScissorsNum) {
    resp.innerText = 'você escolheu papel e a máquina tesoura. a maquina ganhou'
    PontoMaquina.innerText = pontomaq+=1
    
    
}

})

scissors.addEventListener("click",function() {
    MyNumber = 3
    const num = Math.floor(Math.random()*(max - min + 1)) + min;
    
    if ( num == ScissorsNum) {
    resp.innerText = 'empate'
} else if (num == PaperNum) {
    resp.innerText =  ' você escolheu tesoura e máquina papel. você ganhou'
    MeuPonto.innerText = meuponto+=1 
    
}  else if (num == RockNUm) {
    resp.innerText = 'você escolheu tesoura e a máquina pedra. a máquina ganhou'
    PontoMaquina.innerHTML = pontomaq+=1
    
} 
   
})








