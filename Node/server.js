import express from 'express'

const app = express()
app.use(express.json())

app.get('/usuarios/', (req,res) => {
    res.send('olá! você consegui acessar o servidor com sucesso!')
})

app.post('/usuarios', (req,res) => {
    res.send('ola mano!')
    console.log(req)
})

app.listen(3000)
