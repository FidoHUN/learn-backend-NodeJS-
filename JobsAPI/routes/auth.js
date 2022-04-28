const express = require('express')
const router = express.Router()
const { login, register } = require('../controllers/auth')

router.put('/login', login)
router.put('/register', register)

module.exports.authRouter = router
