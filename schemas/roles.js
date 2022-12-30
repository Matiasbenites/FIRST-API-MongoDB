const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolSchema = new Schema({
  name: String,
  description: String,
});

const rolModel = mongoose.model("role", rolSchema);

module.exports = rolModel;
