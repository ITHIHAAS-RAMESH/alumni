const usersModel = require("../models/Users");
const alumniModel = require("../models/Alumni");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  const userExists = await usersModel.findOne({ email: email });
  if (userExists) {
    return res.send({ message: "Email already in use!", success: false });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await usersModel.create({
    username,
    password: hashedPassword,
    email,
    role,
  });
  res.send({
    message: "user created successfully!",
    user: user,
    success: true,
  });
};

const registerAlumni = async (req, res) => {
  const { _id } = req.body;
  const { Batch, Company, Designation, AOE, ResidingIn, State_or_Country } =
    req.body;
  const alumni = await alumniModel.create({
    _id,
    Batch,
    Company,
    Designation,
    AOE,
    ResidingIn,
    State_or_Country,
  });
  if (alumni) {
    await usersModel.findByIdAndUpdate(_id, { is_completed: true });
  }
  res.send({
    message: "Alumni created successfully!",
    alumni: alumni,
    success: true,
  });
};

const registerStudent = async (req, res) => {
  const { _id } = req.body;
  const { Batch, Company, Designation, AOE, ResidingIn, State_or_Country } =
    req.body;
  const alumni = await alumniModel.create({
    _id,
    Batch,
    Company,
    Designation,
    AOE,
    ResidingIn,
    State_or_Country,
  });
  if (alumni) {
    await usersModel.findByIdAndUpdate(_id, { is_completed: true });
  }
  res.send({
    message: "Alumni created successfully!",
    alumni: alumni,
    success: true,
  });
};

const registerTeacher = async (req, res) => {
  const { _id } = req.body;
  const { Batch, Company, Designation, AOE, ResidingIn, State_or_Country } =
    req.body;
  const alumni = await alumniModel.create({
    _id,
    Batch,
    Company,
    Designation,
    AOE,
    ResidingIn,
    State_or_Country,
  });
  if (alumni) {
    await usersModel.findByIdAndUpdate(_id, { is_completed: true });
  }
  res.send({
    message: "Alumni created successfully!",
    alumni: alumni,
    success: true,
  });
};

module.exports = { register, registerAlumni };
