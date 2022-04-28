const mongoose = require('mongoose')

const jobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Please provide a company name'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Please provide a position'],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide a user'],
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('jobsSchema', jobsSchema)
