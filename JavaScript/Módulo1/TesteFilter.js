const company = [
    {
        name: 'Intel',
        MarketValue: 30,
        Foundation: 1890,
    },

    {
        name: 'Apple',
        MarketValue: 120,
        Foundation: 1870,
    },

    {
        name: 'Facebook',
        MarketValue: 100,
        Foundation: 2002,
    },

    {
        name: 'Microsoft',
        MarketValue: 201,
        Foundation: 1890,
    },
]


const Avaliation = company.filter(item => (item.MarketValue < 230 || item.Foundation > 1980))

console.log(Avaliation)