/*-------------------------------------------------- Objecst entries - values ------------------------------------------------------*/

/*---------------- entries --------------------*/
/* Obejct.entries() nos permite transformar un objeto a una matriz, que una matriz es basicamente arrays */
const data = {
  fronted: 'Jorge',
  backend: 'Isabel',
  design: 'Omar',
}

const entries = Object.entries(data)
console.log(entries)
// output
/*  
  [
    [ 'fronted', 'Jorge' ],
    [ 'backend', 'Isabel' ],
    [ 'design', 'Omar' ]
  ] 
*/
console.log(entries.length)

/*---------------- Object.values() --------------------*/
/* Nos permite solo obtener el value de las keys de nuestros objetos, devolviendonos en forma de array */
const data2 = {
  fronted: 'Jorge',
  backend: 'Isabel',
  design: 'Omar',
}

const values = Object.values(data2)
console.log(values)  // [ 'Jorge', 'Isabel', 'Omar' ]
console.log(values.length)



/*----------------------------------- string.padStart() - string.padEnd ----------------------------------------------------*/
const string = 'hello'
// string.padStart(espacioTotal, 'cadenaAAgregar') - agregar al principio
// string.padEnd(espacioTotal, 'cadenaAAgregar') - agregar al final
console.log(string.padStart(8,'hi '))
console.log(string.padEnd(12,' -----'))



/*-------------------------------------------------- treatlink coma ------------------------------------------------------*/
const obj = {
  name: 'Omar',
  lastName: 'Ruiz', // ahora podemos agregar comas al final de los objetos para indicar que podemos agregar mas elementos.
}



/*-------------------------------------------------- async - await ------------------------------------------------------*/
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (false) 
      ? setTimeout(() => resolve('Hello World'), 3000) 
      : reject(new Error('Test Error'))
  })
}

const helloAsync = async () => {
  const hello = await helloWorld()
  console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
  try {
    const hello2 = await helloWorld()
    console.log(hello2)
  } catch (error) {
    console.log(error)
  }
}

anotherFunction()