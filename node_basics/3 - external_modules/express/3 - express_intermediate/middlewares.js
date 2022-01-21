const middleware = (req, res, next) => {
  console.log('Middleware called')
  next()
}

const middleware2 = (req, res, next) => {
  console.log('Middleware2 called')
  next()
}

module.exports.fuggveny = middleware
module.exports.fuggveny2 = middleware2
