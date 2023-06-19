const express = require('express')
const { log } = require('../../middlewares/logger.middleware')
const { getElements } = require('./category.controller')
const router = express.Router()

router.get('/', getElements)

// log middleware -  print info to file backend.log  
// router.get('/', log, getElements)

module.exports = router