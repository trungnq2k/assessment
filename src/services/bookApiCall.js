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

/**
 *
 * @returns the rated book
 */
 const patchBookRating = async (book_rating) => {
    return await db.book_rating.create({
        rating: book_rating.rating,
        book: {
            id: book_rating.bookId
        },
        user: {
            id: book_rating.userId
        }
    })
  };

module.exports = {
  getBooksWithDetails, patchBookRating
};
