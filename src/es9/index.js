/*---------------------------------------------------- obj spread operator ------------------------------------------------------------*/
const obj = {
  name: 'Jorge',
  age: 32,
  country: 'MX',
}

let { country, ...all } = obj
console.log(all)

/*----------------- obj spread operator copy an obj -------------------*/
/* Podemos copiar el objeto entero usando el spread operator */
const obj = {
  name: 'Jorge',
  age: 32
}

const obj2 = {
  ...obj,
  country: 'MX',
}

console.log(obj2)



/*-------------------------------------------------- Promise.finally ------------------------------------------------------*/
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Hello World'), 3000)
      : reject(new Error('Test Error'))
  })
}

helloWorld().then((resolveAnswer) => {
  console.log(resolveAnswer)
}).catch((rejectAnswer) => {
  console.log(rejectAnswer)
}).finally(() => {
  console.log(`Finalizo`)
})



/*-------------------------------------------------------------- regex -----------------------------------------------------------*/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2020-07-23')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)