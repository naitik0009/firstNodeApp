const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/firstDB";
mongoose.connect(url) ? console.log("connected") : console.log("not connected");
const todoSchema = mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

module.exports = {
  todo: new mongoose.model("todos", todoSchema),
};
