const students = [
    {name: 'Rodolfo', testeGrade: 3},
    {name: 'Renan', testeGrade: 8},
    {name: 'Clarisse', testeGrade: 10},
    {name: 'Patrik', testeGrade: 4},
    {name: 'Cauã', testeGrade: 6},
    {name: 'Camila', testeGrade: 1},
    {name: 'Roberto', testeGrade: 5.1},
    {name: 'Inês', testeGrade: 7.1},
]

const NewStudens = students.map (item => {
    return {
    name: item.name,
    testeGrade: item.testeGrade < 5 ? 'reprovado' : 5 <= item.testeGrade &&  item.testeGrade < 7 ? 'de recuperação' : 'aprovado'
    }

    
})

for (let i = 0; i < students.length; i++) {
    console.log(`${NewStudens[i].name} você está ${NewStudens[i].testeGrade}(a)!`)
}

