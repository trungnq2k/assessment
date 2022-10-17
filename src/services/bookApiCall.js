const axios = require("axios");

const db = require("../../models");

/**
 *
 * @returns all seed books
 */
const getBooksWithDetails = async () => {
  const booksWithDetails = db.book.findAll({
    include: [
      {
        model: db.book_detail,
      },
    ],
  });

  return booksWithDetails;
};

module.exports = {
  getBooksWithDetails,
};
