const axios = require("axios");

const db = require("../../models");

/**
 *
 * @returns all seed books
 */
const callBookSeedApi = async () => {
  const books = [];
  try {
    const response = await axios("http://3.95.158.224:3000/api/books");
    books.push({ ...response.data });
  } catch (_err) {
    return {
      status: 400,
      message: "Seed Book API error",
    };
  }

  for (let i = 0; i < books.length; i++) {
    console.log(books[i]);
  }

  return books;
};

/**
 *
 * @returns all seed book details
 */
const callBookDetailSeedApi = async (books) => {
  const bookDetails = [];
  try {
    for (let i = 0; i < books.length; ++i) {
      const response = await axios(`http://3.95.158.224:3000/api/book${books[i].id}`);
      bookDetails.push({ ...response.data });
    }
  } catch (_err) {
    return {
      status: 400,
      message: "Fact API error",
    };
  }
  return bookDetails;
};

// const insertBooks = async (books) => {

// }



module.exports = {
  callBookSeedApi,
};
