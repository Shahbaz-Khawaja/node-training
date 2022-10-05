const db = require('../models');

const Todo = db.Todo;
const User = db.User;
const getAllTodos = (userId) => {
  return Todo.findAll({
    where: {
      user_id: userId,
    },
    include: {
      User,
    },
  });
};

const postBulkOfTodos = (payload) => {
  return Todo.bulkCreate(payload);
};
module.exports = {
  getAllTodos,
  postBulkOfTodos,
};
