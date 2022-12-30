const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: String,
  description: String,
});

const taskModel = mongoose.model("task", taskSchema);

module.exports = taskModel;
