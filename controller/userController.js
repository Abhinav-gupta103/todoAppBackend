const userService = require("../services/userService");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const successRate = await userService.registerUser(email, password);
    res.json({ status: true, success: "User Registered Successfully" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userService.checkUser(email);
    if (!user) {
      throw new Error("User do not exists");
    }
    const isMatch = await user.comparePassword(password);
    if (isMatch === false) throw new Error("Entered Password is false");
    let tokenData = { _id: user._id, email: user.email };
    const token = await userService.generateToken(tokenData, "secretKey", "1h");
    res.status(200).json({ status: true, token: token });
  } catch (err) {
    next(err);
  }
};
