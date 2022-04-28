const { readFile } = require('fs')
const util = require('util')
const readText = util.promisify(readFile)

// Függvény átalakítása, hogy Promise-al térjen vissza
// Tökéletesen működik, de nem kell ezt mindig saját magunk megcsinálni,
// a NodeJS beépített util moduljában megtalálható a Promise-á alakító
// funkcionalitás

// const readText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, res) => {
//       try {
//         resolve(res)
//       } catch (err) {
//         reject(err)
//       }
//     })
//   })
// }

const append = async () => {
  const first = await readText('./info.txt', 'utf8')
  const second = await readText('./info.txt', 'utf8')
  console.log(first, second)
}

append()
