const students = [
    {studentName: 'carlinhos', testeGrade: 4},
    {studentName: 'joão', testeGrade: 8},
    {studentName: 'claudia', testeGrade: 5.5},
    {studentName: 'debora', testeGrade: 3.2},
    {studentName: 'cleiton', testeGrade: 9.5},
    {studentName: 'ana carla', testeGrade: 6},
    {studentName: 'julio', testeGrade: 10},
    {studentName: 'matheus', testeGrade: 2.2},
    {studentName: 'joyce', testeGrade: 5},
]

const studentsAnalise = students.map(persons => {

    let approvalStatus

    if (persons.testeGrade >= 5){
        approvalStatus = 'Aprovado(a)'
    } else {
        approvalStatus = 'Reprovado(a)'
    }
    const statusPersons = {
        studentsName: persons.studentName,
        approvalStatus: approvalStatus
    }

    return statusPersons
})

console.log(studentsAnalise)