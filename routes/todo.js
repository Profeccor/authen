const router = require('express').Router()
const todoController = require ('../controllers/todo')
const checkAuth = require('../middlewares/checkAuth')
const authorization = require ('../middlewares/authorization')


router.post('/add',checkAuth,todoController.createTodo)
router.get('/get',checkAuth,todoController.getMyTodo)

module.exports=router