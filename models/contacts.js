const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: String,
  type: String,
  phone: String,
  email: String
});

module.exports = mongoose.model("Contact", schema);