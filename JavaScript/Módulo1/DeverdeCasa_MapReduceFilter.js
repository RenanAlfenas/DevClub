const empresas = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
]

// subtrair 10% do valor de mercado de todas as companhias
// filtrar somente as fundadas depois de 1980
// somar o valor de mercado das restantes

let percent = company => {
  company.marketValue =  company.marketValue - (company.marketValue/10) 

    return company
}

let filtragem = company => company.foundedOn > 1980 


let sum = (acc,company) => {
        return acc + company.marketValue
    }

const NewMarketValue = empresas.map( percent ).filter(filtragem).reduce(sum,0)

console.log(NewMarketValue)