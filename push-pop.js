const countries = ['USA','Canada','UK']

const tempFahren = [10,32,14,16,17]
const temCelsius = tempFahren.map(f=>(5/9)*(f-32))
console.log(temCelsius)

const numeros = [1,3,4,5,6,7,8,9,10,12,25,16,18,30]

const menorescinco=numeros.filter(n=>n<5)
console.log(numeros)
console.log(menorescinco)
