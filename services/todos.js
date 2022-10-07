const db = require('../models');

const Todo = db.Todo;

const getAllTodosByUserId = (userId) => {
  return Todo.findAll({
    where: {
      user_id: userId,
    },
  });
};

const postSingleTodoByUserId = (userId, payload) => {
  return Todo.create({ ...payload, user_id: userId });
};

const getSingleTodoByTodoId = (userId, todoId) => {
  return Todo.findOne({
    where: { user_id: userId, todo_id: todoId },
  });
};

const deleteSingleTodoByTodoId = (userId, todoId) => {
  return Todo.destroy({
    where: { user_id: userId, todo_id: todoId },
  });
};

module.exports = {
  getAllTodosByUserId,
  postSingleTodoByUserId,
  getSingleTodoByTodoId,
  deleteSingleTodoByTodoId,
};
