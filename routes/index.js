const express = require('express');
const router = express.Router();
const Todo = require('../models/todo.model');
const TodoController = require('../controller/Todo');


// display all todo 
router.get('/', async function (req, res, next) {
  TodoController.showTodo(req, res);
});
router.get('/addtodo', function (req, res, next) {
  res.render('./add', {
    title: 'Todo',
    name: '',
    messages: {
      success: "",
      error: ""
    }
  })
})
// add a new todo
router.post('/addtodo', async function (req, res, next) {
  TodoController.addTodo(req, res)
})
// edit todo
router.get('/edittodo/(:id)', function (req, res, next) {  
  res.render('./edit', {
    name: '',
    id:req.params.id,
  })
  TodoController.editTodo(req, res);
})
// delete todo
router.get('/deletetodo/(:id)', function (req, res, next) {
  TodoController.deleteTodo(req, res);
})

module.exports = router;