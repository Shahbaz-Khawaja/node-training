const express = require('express');
const {
  postUserController,
  getAllUsersController,
  getSingleUserController,
  deleteUserController,
  updateUserController,
} = require('../controllers/users');
const { userValidator } = require('../middleware/validators/users');
const router = express.Router();

router.post('/', userValidator, postUserController);
router.get('/', getAllUsersController);
router.get('/:userId', getSingleUserController);
router.delete('/:userId', deleteUserController);
router.put('/:userId', userValidator, updateUserController);

module.exports = router;
