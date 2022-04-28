const { people } = require('../data')

const getPeople = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: people,
  })
  next()
}

const getPersonById = (req, res, next) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({
      success: false,
      message: `There is no person with the ID of ${req.params.id}`,
    })
  }
  res.status(200).json({
    success: true,
    data: person,
  })
  next()
}

const addPerson = (req, res, next) => {
  const person = people.find((person) => person.id === Number(req.body.id))
  if (person) {
    return res.status(404).json({
      success: false,
      message: `ID ${req.body.id} is already in use`,
    })
  }
  const newPeople = [...people]
  newPeople.push(req.body)
  res.status(200).json({
    success: true,
    data: newPeople,
  })
  next()
}

const updatePerson = (req, res, next) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({
      success: false,
      message: `There is no person with the ID of ${req.params.id}`,
    })
  }
  const index = people.indexOf(person)
  const newPeople = [...people]
  //  newPeople[index] = req.body
  if (req.body.id) {
    newPeople[index].id = req.body.id
  }
  if (req.body.name) {
    newPeople[index].name = req.body.name
  }
  res.status(200).json({
    success: true,
    data: newPeople,
  })
  next()
}

const deletePerson = (req, res, next) => {
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res.status(404).json({
      success: false,
      message: `There is no person with the ID of ${req.params.id}`,
    })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  res.status(200).json({
    success: true,
    data: newPeople,
  })
  next()
}

module.exports.getPeople = getPeople
module.exports.getPersonById = getPersonById
module.exports.addPerson = addPerson
module.exports.updatePerson = updatePerson
module.exports.deletePerson = deletePerson
