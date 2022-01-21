const express = require('express')
const router = express.Router()
const { login, dashboard } = require('../controllers/users')

// POST /api/v1/login
// provide username and password, get back msg and token

// GET /api/v1/dashboard
// to get back msg and secret

router.post('/api/v1/login', login)
router.get('/api/v1/dashboard', dashboard)
module.exports.router = router
