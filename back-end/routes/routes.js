const express = require("express");
const db = require("../db/db.js");

module.exports = {
  jogos: require("./jogos")(express, db),
  account: require("./account.js")(express, db),
};
