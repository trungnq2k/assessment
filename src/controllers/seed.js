const { callSeedApi } = require("../services/seedApiCall");

const postSeed = (_req, res) => {
  void (async () => {
    res.json(await callSeedApi());
  })();
};

// export const insertFacts = (_req: any, res: any): void => {
//   void (async (res) => {
//     const insertedFacts = await insertFacts5Times()
//     res.status(201).json(insertedFacts)
//   })(res)
// }

module.exports = {
  postSeed,
};
