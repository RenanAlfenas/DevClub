import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.get('/usuarios/', async (req,res) => {

        const users = await prisma.user.findMany()
    res.status(200).json(`${users[4].name} sua idade é ${users[4].age} anos`)
  

    console.log(users)
})

app.post('/usuarios', async (req,res) => {
   const person =  await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json({mensage: "usuário cadastrado com sucesso"})
    console.log(person)
})



app.listen(3000)
