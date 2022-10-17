const { getAuthors } = require("../services/authorApiCall");

const getAllAuthors = (_req, res) => {
  void (async () => {
    res.json(await getAuthors());
  })();
};

module.exports = {
    getAllAuthors,
};
