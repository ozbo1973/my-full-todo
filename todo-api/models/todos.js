//models/todos
const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "you must input a name"
  },
  completed: {
    type: Boolean,
    default: false
  },
  created_At: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Todos", todosSchema);
