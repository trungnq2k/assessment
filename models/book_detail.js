'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  book_detail.init({
    authorId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    noOfPages: DataTypes.INTEGER,
    dateOfPublishing: DataTypes.STRING,
    illustrator: DataTypes.STRING,
    genre: DataTypes.STRING,
    publisher: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book_detail',
  });
  return book_detail;
};