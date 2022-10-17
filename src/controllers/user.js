const { callUserRegisterApi } = require("../services/userApiCall");

const postUser = (req, res) => {
  void (async () => {
    const insertedUser = await callUserRegisterApi(req.body);
    res.json(insertedUser);
  })();
};

module.exports = {
  postUser,
};
