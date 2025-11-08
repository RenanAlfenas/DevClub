import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.post('/user', async (req,res) => {
    const person = await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            task: req.body.task
        }
    })
    res.status(201).json({mensage: "usuário cadastrado com sucesso"})
    console.log(person)
})










app.listen(3000)