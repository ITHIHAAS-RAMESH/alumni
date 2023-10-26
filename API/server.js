const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const SignupAndLogin = require("./routers/SignupAndLogin");
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/user", SignupAndLogin);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server is running on port ${PORT}`);
  });
});
