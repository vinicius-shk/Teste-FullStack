module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    site: DataTypes.STRING,
    category: DataTypes.STRING,
    input: DataTypes.STRING,
  },
    {
      timestamps: false,
      tableName: 'users_searchs',
      underscored: true,
    });

  return User;
};