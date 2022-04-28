const Jobs = require('../models/Job')
const { NotFoundError, BadRequestError } = require('../errors')
const { StatusCodes } = require('http-status-codes')

const getAllJobs = async (req, res) => {
  const userId = req.user.userId
  const jobs = await Jobs.find({ createdBy: userId })
  res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}
const getJob = async (req, res) => {
  const userId = req.user.userId
  const jobId = req.params.id
  const job = await Jobs.findOne({ _id: jobId, createdBy: userId })
  if (!job) {
    throw new NotFoundError(`There is no job with the id of ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ job })
}
const createJob = async (req, res) => {
  const userId = req.user.userId
  const { company, position } = req.body
  if (!company || !position) {
    throw new BadRequestError('Please provide both company name and position')
  }
  const job = await Jobs.create({
    company,
    position,
    createdBy: userId,
  })
  res.status(StatusCodes.CREATED).json({ job })
}
const updateJob = async (req, res) => {
  const userId = req.user.userId
  const jobId = req.params.id
  const { company, position, status } = req.body
  if (!company || !position || !status) {
    throw new BadRequestError('Please provide all required fields')
  }
  if (company === '' || position === '' || status === '') {
    throw new BadRequestError('The required fields cannot be empty')
  }
  const updatedJob = await Jobs.findOneAndUpdate(
    { _id: jobId, createdBy: userId },
    { company, position, status },
    { new: true, runValidators: true }
  )
  if (!updatedJob) {
    throw new NotFoundError(`There is no job with the id of ${jobId}`)
  }
  res.status(StatusCodes.OK).json({ updatedJob })
}
const deleteJob = async (req, res) => {
  const userId = req.user.userId
  const jobId = req.params.id
  const jobDeleted = await Jobs.findOneAndDelete({
    _id: jobId,
    createdBy: userId,
  })
  if (!jobDeleted) {
    throw new BadRequestError(`There is no job with the id of ${jobId}`)
  }
  res.status(StatusCodes.OK).send()
}

module.exports = {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
}
