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
      id: book_rating.bookId,
    },
    user: {
      id: book_rating.userId,
    },
  });
};

/**
 *
 * @returns the average rating of a book
 */
const getAverageBookRating = async (bookId) => {
  const ratings = await db.book_rating.findAll({
    where: {
      "$book.id$": bookId,
    },
    include: [
      {
        model: db.book,
      },
      {
        model: db.user,
      },
    ],
  });

  let averageRating = 0;
  for (let i = 0; i < ratings.length; i++) {
    averageRating += ratings[i].rating;
  }

  return averageRating / ratings.length;
  //   console.log(ratings);
};

module.exports = {
  getBooksWithDetails,
  patchBookRating,
  getAverageBookRating,
};
