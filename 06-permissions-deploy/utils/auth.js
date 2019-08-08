"use strict";

require("dotenv").config();
const crypto = require("crypto");
const bcrypt = require("bcryptjs");

function HMAC(password) {
  return crypto
    .createHmac("sha512", process.env.SHARED_KEY)
    .update(password)
    .digest("hex");
}

const hashPassword = password => {
  const SALT_ROUNDS = 10;

  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const HMACpassword = HMAC(password);

  return bcrypt.hashSync(HMACpassword, salt);
};

const comparePassword = async (password, hash) => {
  const HMACpassword = HMAC(password);
  return await bcrypt.compare(HMACpassword, hash);
};

module.exports = { hashPassword, comparePassword };
