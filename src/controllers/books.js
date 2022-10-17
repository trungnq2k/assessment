const { getBooksWithDetails, patchBookRating } = require("../services/bookApiCall");

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
  

module.exports = {
    getBooks, patchRatings
};
