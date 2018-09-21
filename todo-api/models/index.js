// Models index.
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api");
mongoose.Promise = Promise;

module.exports.Todos = require("./todos");
