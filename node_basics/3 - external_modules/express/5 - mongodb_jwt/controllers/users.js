const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const login = async (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    return res.status(400).json({
      msg: 'Please enter your username and password',
    })
  }
  const result = await User.findOne(req.body)
  // another approach with .then() instead, but in that case we dont have to use async await
  // User.findOne(req.body).then((result) => {
  //   console.log(result);
  // })
  if (!result) {
    return res.status(401).json({
      msg: 'User not found',
    })
  }
  const id = new Date().getDate()
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET)
  res.status(200).json({
    msg: 'User successfully found',
    token,
  })
  next()
}

const dashboard = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (authHeader === 'null') {
    return res.status(401).json({ msg: 'Authentication error' })
  }
  res.status(200).json({
    msg: 'Az élet értelme: ',
    secret: 'tudjaafaszom',
  })
  next()
}

module.exports.login = login
module.exports.dashboard = dashboard
