const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const login = async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    throw new BadRequestError('Please provide a name and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid credentials')
  }
  const passwordCorrect = await user.checkPassword(password)
  if (!passwordCorrect) {
    throw new UnauthenticatedError('Invalid credentials')
  }
  const token = user.createToken()
  res
    .status(StatusCodes.OK)
    .json({ user: { userId: user._id, name: user.name }, token })
}

const register = async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    throw new BadRequestError('Please provide every value!')
  }
  //! hash the password
  //! better approach to do this functionality in the Model using mongoose middleware function instead
  // const salt = await bcrypt.genSalt(10)
  // const hashedPassword = await bcrypt.hash(password, salt)
  //! await is crucial because otherwise its just a promise, not a string
  // const newUser = { name, email, password: hashedPassword }

  const user = await User.create(req.body)

  //! generate token
  //! better approach to do this functionality in the Model using Instance Method
  // const token = jwt.sign({ name: user.name, email: user.email }, 'jwtSecret', {
  //   expiresIn: '30d',
  // })

  const token = user.createToken()

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
}

module.exports = {
  login,
  register,
}
