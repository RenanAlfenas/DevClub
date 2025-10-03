let valor = document.getElementById('cron-text').value

let cont = document.querySelector('h1')

let cron

let n = 0

function start() {

    if (cron) return; // peguei no chat e não entendi muito bem como funciona. mas parece que serve para poder permitir reiniciar o cronometro caso eu pause
    cron = setInterval(() => {

        n++

        let hrs = Math.floor(n/3600)
        let min = Math.floor((n%3600)/60)
        let seg = n%60

        
        let timer = 
      String(hrs).padStart(2, "0") + ":" +
      String(min).padStart(2, "0") + ":" +          
      String(seg).padStart(2, "0");

        /* 
                        ^
                        |

        peguei no chat mas entendi para que serve. string(hrs) 
        serve para transformar a minha variavel em uma string e 
        pasStart(2, "0") serve para poder eu inserir 2 zeros se 
        não tiver nada e 1 zero caso tenha um numero nessa casa. 
        ele permite a formatação 00:00:00



        */




      cont.textContent = timer
        
        
        

    }, 1000);
    

    
}

function stop() {
    clearInterval(cron)
    cron = null // peguei no chat e não entendi muito bem como funciona.
}
