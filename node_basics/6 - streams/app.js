const { createReadStream } = require('fs')

const read = createReadStream('./big.txt', {
  encoding: 'utf8',
  highWaterMark: 32 * 1024,
})

read.on('data', (chunk) => {
  console.log(`Blokk beolvasva! Méret: ${chunk.length} bájt`)
  console.log('Tartalom: ', chunk)
})

read.on('error', (err) => {
  console.log(err)
})
