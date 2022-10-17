const axios = require("axios");

const db = require("../../models");

/**
 *
 * @returns all authors
 */
const getAuthors = async () => {
  const authors = db.author.findAll({});

  return authors;
};

module.exports = {
    getAuthors,
};
