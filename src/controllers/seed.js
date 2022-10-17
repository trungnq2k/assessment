const { callSeedApi } = require("../services/seedApiCall");

const postSeed = (_req, res) => {
  void (async () => {
    res.json(await callSeedApi());
  })();
};

module.exports = {
  postSeed,
};
