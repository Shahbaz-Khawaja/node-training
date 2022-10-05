const { userSchema } = require('../../schemas/users');

const userValidator = async (req, res, next) => {
  try {
    await userSchema.validate(req.body);
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = {
  userValidator,
};
