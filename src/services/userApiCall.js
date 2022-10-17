const db = require("../../models");

/**
 *
 * @returns user registered
 */
const callUserRegisterApi = async (user) => {
  try {
    const insertedUser = await db.user.create(user);
    return insertedUser;

  } catch (_err) {
    console.log(_err);
  }
};

module.exports = {
  callUserRegisterApi,
};
