const { object, string, number } = require('yup');

const userSchema = object().shape({
  user_name: string().label('User Name').required(),
  id: number().label('User Id'),
  age: number().label('Age').required(),
});

module.exports = { userSchema };
