let MeuArray = [
    {number: 12},
    {number: 2},
    {number: 4},
]

let checking = MeuArray.every(user => user.number > 0 && user.number < 50)

console.log(checking)