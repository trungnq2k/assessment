const {
  getBooksWithDetails,
  patchBookRating,
  getAverageBookRating
} = require("../services/bookApiCall");

const getBooks = (_req, res) => {
  void (async () => {
    res.json(await getBooksWithDetails());
  })();
};

const patchRatings = (req, res) => {
  void (async () => {
    res.json(await patchBookRating(req.body));
  })();
};

const getRatings = (req, res) => {
  void (async () => {
    res.json(await getAverageBookRating(req.params.id));
  })();
};

module.exports = {
  getBooks,
  patchRatings,
  getRatings
};
