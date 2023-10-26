const usersModel = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await usersModel.findOne({ email: email });
  if (!user) {
    return res.send({ message: "username or password is incorrect!" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.send({ message: "username or password is incorrect!" });
  }
  const token = jwt.sign({ user }, process.env.SECRET_TOKEN);
  res.send({ token: token, user: user });
};

module.exports = login;
