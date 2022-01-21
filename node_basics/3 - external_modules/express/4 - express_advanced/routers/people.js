const express = require('express')
const router = express.Router()
const {
  getPeople,
  getPersonById,
  addPerson,
  updatePerson,
  deletePerson,
} = require('../controllers/people')

router.get('/api/people', getPeople)
router.get('/api/people/:id', getPersonById)
router.post('/api/people', addPerson)
router.put('/api/people/:id', updatePerson)
router.delete('/api/people/:id', deletePerson)

module.exports.router = router
