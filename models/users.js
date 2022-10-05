module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      user_name: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      age: {
        type: DataTypes.INTEGER,
      },
    },
    {
      associate: (models) => {
        User.hasMany(models.Todo, {
          foreignKey: { name: 'user_id', field: 'user_id' },
        });
      },
    }
  );
  return User;
};
