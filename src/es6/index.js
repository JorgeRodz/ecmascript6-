/*-------------------------------------------------- Default params -----------------------------------------------------------------*/
function newFuction(name, age, country) {
  var name = name || 'jorge'
  var age = age || 28
  var country = country || 'MX'
  console(name, age, country)
}

/*---------------- es6 --------------------*/
/* Ahora podemos agregar asi los parametros por defecto en caso de que no se le pasen parametros en las funciones */

function newFunction2(name = 'jorge', age = 28, country = 'MX'){
  console.log(name, age, country)
}

newFunction2()
newFunction2('Alberto', 30, 'CO')



/*-------------------------------------------------- Template literals -------------------------------------------------------------*/
let hello = "Hello"
let world = "World"
let epicPhrase = hello +" "+ world
console.log(epicPhrase)

/*---------------- es6 --------------------*/
/* Usando comillas francesas podemos usar los template literals que se declaran asi ${variable}, con esto se quita la concatenacion de strings y se deja mas en claro el mensaje */
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

/*------------------------------------- otro ejmeplo----- ---------------------*/
let lorem = "Aqui deberia ir un lorem ipsum pero no tengo tiempo de buscarloooooooooooooooooooooooooooooooooooooooooooooooooooooooooo \n"
+ "otra frase epicaaaaaaaaaaaaaaaaa"

/*---------------- es6 --------------------*/
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`

console.log(lorem)
console.log(lorem2)



/*-------------------------------------------------- desctructuring -----------------------------------------------------------------*/
let person = {
  fullName: {
    name: 'Jorge',
    lastName: 'Rodriguez'
  },
  birthday: {
    day: 'Tuesday',
    month: 'February',
    year: 1992
  },
  country: 'MX',
  gender: 'Male'
}

console.log(person.fullName, person.birthday, person.country, person.gender)

/*---------------- es6 - object destructuring --------------------*/

let { fullName: { name } , birthday: { year:generation }, country, favoriteFood = 'pizza' } = person
console.log( name, generation, country, favoriteFood)



/*---------------------------------------------------- spread operator --------------------------------------------------------------*/
let team1 = ['Oscar', 'Julian', 'Ricardo']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education)



/*-------------------------------------------------- var - let - const ------------------------------------------------------*/
{
  var globalVar = "Global var"
}

{
  let globalLet = "Global Let"
  console.log(globalLet)
}

console.log(globalVar)

const a = 'b'
a =  'a'



/*-------------------------------------------------- Objects params ------------------------------------------------------*/
let name = 'Jorge'
let age =  28

let obj = { nombre: name, edad: age }
console.log(obj)

/*---------------- es6 --------------------*/
let obj2 = { name, age }
console.log(obj2)



/*-------------------------------------------------- Arrow functions ----------------------------------------------------------*/
const names = [
  {name: 'Jorge', age: 28},
  {name: 'Omar', age: 24},
  {name: 'Raul', age: 28}
]

let listOfNames = names.map(function (item) {
  console.log(item.name)
})

let listOfNames2 = names.map(item => console.log(item.name))



/*-------------------------------------------------- promises ------------------------------------------------------------------*/
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('succes')
    } else {
      reject('Algo salio mal')
    }
  })
}

helloPromise()
.then(resolveAnswer => console.log(resolveAnswer))
.catch(error => console.log(error))



/*-------------------------------------------------- Class ---------------- ------------------------------------------------------*/
class calculator {
  constructor() {
    this.valueA = 0
    this.valueB = 0
  }
  sum(valueA, valueB){
    this.valueA = valueA
    this.valueB = valueB
    return this.valueA + this.valueB
  }
}

const calc = new calculator()
console.log(calc.sum(2, 2))



/*--------------------------------------------------- modules -----------------------------------------------------------------------*/
import { hello } from './module'

hello()



/*-------------------------------------------------- generators -------------------------------------------------------------------*/
function* helloWorld() {
  if (true) {
    yield 'Hello, '
  } 
  if (true) {
    yield 'World'
  }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)
