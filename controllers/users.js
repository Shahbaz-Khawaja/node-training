const {
  postUser,
  getAllUsers,
  getSingleUser,
  deleteUser,
} = require('../services/users');

const postUserController = async (req, res) => {
  try {
    const response = await postUser(req.body);
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

const getAllUsersController = async (req, res) => {
  try {
    const response = await getAllUsers();
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

const deleteUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const response = await deleteUser(userId);
    if (!response) return res.status(400).json({ msg: 'User does not Exist' });
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

const getSingleUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const response = await getSingleUser(userId);
    if (!response) return res.status(400).json({ msg: 'User does not Exist' });
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

const updateUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const existingUser = await getSingleUser(userId);
    if (!existingUser)
      return res.status(400).json({ msg: 'User does not Exist' });
    existingUser.update({ ...req.body });
    res.status(201).json({
      msg: 'success',
      data: existingUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal server error',
      error: error.message,
    });
  }
};

module.exports = {
  postUserController,
  deleteUserController,
  getAllUsersController,
  getSingleUserController,
  updateUserController,
};
