const db = require('../models');

const User = db.User;

const getAllUsers = () => {
  return User.findAll();
};

const postUser = (payload) => {
  return User.create(payload);
};

const getSingleUser = (userId) => {
  return User.findOne({
    where: { user_id: userId },
  });
};

const deleteUser = (userId) => {
  return User.destroy({
    where: { user_id: userId },
  });
};

module.exports = {
  getAllUsers,
  postUser,
  deleteUser,
  getSingleUser,
};
