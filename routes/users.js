const express = require('express');
const {
  postUserController,
  getAllUsersController,
  getSingleUserController,
  deleteUserController,
  updateUserController,
} = require('../controllers/users');
const { userSchema } = require('../schemas/users');
const inputFormValidator = require('../middleware/inputFormValidator');
const router = express.Router();

router.post('/', inputFormValidator(userSchema), postUserController);
router.get('/', getAllUsersController);
router.get('/:userId', getSingleUserController);
router.delete('/:userId', deleteUserController);
router.patch('/:userId', inputFormValidator(userSchema), updateUserController);

module.exports = router;
