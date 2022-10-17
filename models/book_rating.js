'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_rating.hasOne(models.book, {
        foreignKey: "id"
      })
      book_rating.hasOne(models.user, {
        foreignKey: "id"
      })
    }
  }
  book_rating.init({
    bookId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'book_rating',
  });
  return book_rating;
};