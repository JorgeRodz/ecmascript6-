// function newFuction(name, age, country) {
//   var name = name || 'jorge'
//   var age = age || 28
//   var country = country || 'MX'
//   console(name, age, country)
// }

//*---------------- es6 --------------------*/
/* Ahora podemos agregar asi los parametros por defecto en caso de que no se le pasen parametros en las funciones */

function newFunction2(name = 'jorge', age = 28, country = 'MX'){
  console.log(name, age, country)
}

newFunction2()
newFunction2('Alberto', 30, 'CO')

let hello = "Hello"
let world = "World"
let epicPhrase = hello +" "+ world
console.log(epicPhrase)
// --- es6 - template literals
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)