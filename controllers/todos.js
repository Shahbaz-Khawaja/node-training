const {
  getAllTodosByUserId,
  postSingleTodoByUserId,
  getSingleTodoByTodoId,
  deleteSingleTodoByTodoId,
} = require('../services/todos');

const getAllTodosController = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await getAllTodosByUserId(userId);
    res.status(201).json({
      msg: 'success',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

const postSingleTodoController = async (req, res) => {
  const userId = req.params.userId;
  try {
    const response = await postSingleTodoByUserId(userId, req.body);
    res.status(201).json({
      msg: 'success',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

const getSingleTodoController = async (req, res) => {
  const { userId, todoId } = req.params;
  try {
    const response = await getSingleTodoByTodoId(userId, todoId);
    if (!response) return res.status(400).json({ msg: 'Todo does not Exist' });
    res.status(201).json({
      msg: 'success',
      data: response,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

const updateSingleTodoController = async (req, res) => {
  const { userId, todoId } = req.params;
  try {
    const existingTodo = await getSingleTodoByTodoId(userId, todoId);
    if (!existingTodo)
      return res.status(400).json({ msg: 'Todo does not Exist' });
    existingTodo.update({ ...req.body });
    res.status(201).json({
      msg: 'success',
      data: existingTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

const deleteSingleTodoController = async (req, res) => {
  const { userId, todoId } = req.params;
  try {
    const existingTodo = await getSingleTodoByTodoId(userId, todoId);
    if (!existingTodo)
      return res.status(400).json({ msg: 'Todo does not Exist' });
    const response = await deleteSingleTodoByTodoId(userId, todoId);
    if (!response) return res.status(400).json({ msg: 'Todo does not Exist' });
    res.status(201).json({
      msg: 'success',
      data: existingTodo,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

module.exports = {
  getAllTodosController,
  postSingleTodoController,
  updateSingleTodoController,
  getSingleTodoController,
  deleteSingleTodoController,
};
