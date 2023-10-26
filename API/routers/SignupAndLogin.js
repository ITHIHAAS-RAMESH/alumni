const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const { register, registerAlumni } = require("../controllers/register");

router.post("/register", register);
router.post("/registeralumni", registerAlumni);
router.post("/login", login);
module.exports = router;
