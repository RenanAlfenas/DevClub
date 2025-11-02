import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const app = express()
app.use(express.json())

app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ message: error.message });
  }
});

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

app.put('/usuarios/:id', async (req,res) => {
   const person =  await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        }
    })
    res.status(201).json({mensage: "usuário cadastrado com sucesso"})
    console.log(person)
})


app.delete('/usuarios/:id', async (req,res) => {
    await prisma.user.delete ({
        where:{
            id:req.params.id,
        } 
    })

    res.status(200).json({mensage: "Usuário deletado com sucesso!"})
})


app.listen(3000)
