const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const userService = {
  async registerUser(email, password) {
    try {
      const createUser = new UserModel({ email, password });
      return await createUser.save();
    } catch (err) {
      throw err;
    }
  },
  async checkUser(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      throw err;
    }
  },
  async generateToken(tokenData, secretKey, jwt_expire) {
    try {
      return await jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
    } catch (err) {
      throw err;
    }
  },
};

module.exports = userService;
