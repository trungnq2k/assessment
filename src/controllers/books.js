const { callBookSeedApi } = require("../services/bookApiCall");

const getBooks = (_req, res) => {
  void (async () => {
    res.json(await callBookSeedApi());
  })();
};

// export const insertFacts = (_req: any, res: any): void => {
//   void (async (res) => {
//     const insertedFacts = await insertFacts5Times()
//     res.status(201).json(insertedFacts)
//   })(res)
// }

module.exports = {
  getBooks,
};
