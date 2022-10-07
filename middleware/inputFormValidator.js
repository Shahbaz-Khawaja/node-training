const inputFormValidator = (schema) => (req, res, next) => {
  try {
    schema.validateSync(req.body);
    next();
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

module.exports = inputFormValidator;
