module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      todo: {
        type: DataTypes.STRING,
      },
      todo_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      associate: (models) => {
        Todo.belongsTo(models.User, {
          foreignKey: { name: 'user_id', field: 'user_id' },
        });
      },
    }
  );
  return Todo;
};
