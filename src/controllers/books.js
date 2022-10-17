const { getBooksWithDetails } = require("../services/bookApiCall");

const getBooks = (_req, res) => {
  void (async () => {
    res.json(await getBooksWithDetails());
  })();
};

module.exports = {
    getBooks,
};
