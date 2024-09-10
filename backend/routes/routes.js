const express = require("express");
const router = express.Router();
const users = require("../models/users");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const isEmailthere = await users.findOne({ email: req.body.email });

  if (isEmailthere === null) {
    return res.json({
      status: false,
      message: "User is not present please sigin",
    });
  } else {
    const checkPassword = bcrypt.compareSync(
      req.body.password,
      isEmailthere.password
    );

    if (checkPassword) {
      return res.json({
        status: "true",
        message: "logged in",
      });
    } else {
      return res.json({ status: false, message: "Incorrect password" }); // Incorrect password
    }
  }
});

router.post("/createuser", async (req, res) => {
  const isUserPresent = await users.findOne({ email: req.body.email });
  console.log(isUserPresent);

  if (isUserPresent !== null) {
    return res.json({ status: false, message: "User is already present" });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const creatingUser = await users.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    });

    return res.json({
      status: true,
      message: "logged in",
    });
  }
});

module.exports = router;
