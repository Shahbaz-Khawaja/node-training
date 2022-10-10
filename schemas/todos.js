const { object, string, number } = require('yup');

const todoSchema = object().shape({
  todo: string().label('Todo Name').required(),
  todo_id: number().label('Todo Id'),
});

module.exports = { todoSchema };
