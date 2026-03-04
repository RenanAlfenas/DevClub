const list = [
    {nameGuest: 'Renan', Vip: true},
    {nameGuest: 'Clarisse', Vip: true},
    {nameGuest: 'Patrik', Vip: false},
    {nameGuest: 'Caue', Vip: false},
    {nameGuest: 'Matheus', Vip: false},
    {nameGuest: 'Hawad', Vip: true},
]

const newList = list.map(persons => {
    let color
    
    if(persons.Vip) {
         color = 'black'
    } else {
         color = 'green'
    }

    const newUsers = {
        newName: persons.nameGuest,
        bracelet: color
    }
    return newUsers
})

console.log(newList)