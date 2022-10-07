const express = require('express');
const {
  getAllTodosController,
  postSingleTodoController,
  updateSingleTodoController,
  getSingleTodoController,
  deleteSingleTodoController,
} = require('../controllers/todos');
const { todoSchema } = require('../schemas/todos');
const inputFormValidator = require('../middleware/inputFormValidator');
const router = express.Router();

router.get('/:userId/todos', getAllTodosController);

router.post(
  '/:userId/todos',
  inputFormValidator(todoSchema),
  postSingleTodoController
);
router.get('/:userId/todos/:todoId', getSingleTodoController);

router.patch(
  '/:userId/todos/:todoId',
  inputFormValidator(todoSchema),
  updateSingleTodoController
);

router.delete('/:userId/todos/:todoId', deleteSingleTodoController);

module.exports = router;
