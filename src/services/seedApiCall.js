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
    books.push(...response.data);
  } catch (_err) {
    console.log(_err);
    return null;
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
      const response = await axios(
        `http://3.95.158.224:3000/api/book/${books[i].id}`
      );
      bookDetails.push({ ...response.data });
    }
  } catch (_err) {
    console.log(_err);
    return null;
  }
  return bookDetails;
};

/**
 *
 * @returns all seed authors
 */
const callAuthorSeedApi = async () => {
  const authors = [];
  try {
    for (let i = 1; i < 3; ++i) {
      const response = await axios(
        `http://3.95.158.224:3000/api/book/author/${i}`
      );
      authors.push({ ...response.data });
    }
  } catch (_err) {
    console.log(_err);
    return null;
  }

  return authors;
};

/**
 *
 * Insert all seed data to database
 * @returns None
 */
const callSeedApi = async () => {
  try {
    const books = await callBookSeedApi();
    const bookDetails = await callBookDetailSeedApi(books);
    const authors = await callAuthorSeedApi();

    await db.book.bulkCreate(books);
    await db.book_detail.bulkCreate(bookDetails);
    await db.author.bulkCreate(authors);

    return {
      status: 200,
      message: "Insert seed data successfully!",
    };
  } catch (_err) {
    console.log(_err);
    return {
      status: 400,
      message: "Fact API error",
    };
  }
};

module.exports = {
  callSeedApi,
};
