const { callBookSeedApi } = require("../services/bookApiCall");

const getBooks = (_req, res) => {
  void (async () => {
    res.json(await callBookSeedApi());
  })();
};


module.exports = {
  getBooks,
};
