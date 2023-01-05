const mongoose = require("mongoose");
const db = require("../db/mongoose.js");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const chalk = require("chalk");
const atob = require("atob");

const auth = async (req, res, next) => {
  let headers = req.headers;
  let token = req.headers.authorization;

  const parseJwt = (token) => {
    try {
      return JSON.parse(atob(token.split(".")[1]));
    } catch (e) {
      return null;
    }
  };

  const parsedToken = parseJwt(token);

  try {
    const user = await User.findById(parsedToken.id);
  } catch (e) {}

  if (token && token.split(" ")[1]) {
    token = req.headers.authorization.split(" ")[1].toString();
  } else {
    return res.status(404).send({ error: "Not verified" });
  }

  //TEMP_SECRET
  let decoded;
  try {
    decoded = jwt.verify(JSON.parse(token), process.env.TEMP_SECRET);
  } catch (err) {
    return res.status(404).send({ error: "Not Verified" });
  }

  const id = mongoose.Types.ObjectId(decoded.id);

  try {
    const user = await User.findById(id);
    req.user = user;
    delete req.user.password;
    delete req.user.password2;
    next();
  } catch (e) {
    return res.status(404).send({ error: "Not Verified" });
  }
};

module.exports = auth;
