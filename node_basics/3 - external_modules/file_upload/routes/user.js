const router = require('express').Router()
const cloudinary = require('../utils/cloudinary')
const upload = require('../utils/multer')
const User = require('../model/user')

router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    res.json(result)
    //create instance of user
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url
    })
    //save user
    await user.save()
  } catch (error) {
    console.log(error);
  }
})

router.get('/pictures', async (req, res) => {
  try {
    let user = await User.find({ 
      name: req.query.name
    });
    let result = []
    user.map(user => {
      result.push(user.avatar)
    })
    res.json(result)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router