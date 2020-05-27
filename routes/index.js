const express = require ('express')
const router =express.Router()
const auth = require('./auth')
const todo = require ('./todo')

router.use('/auth',auth)
router.use('/todos',todo)

module.exports = router