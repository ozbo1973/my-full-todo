//helpers/routes
const db = require("../models");

exports.getTodos = (req, res) => {
  db.Todos.find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
};

exports.createTodo = (req, res) => {
  db.Todos.create(req.body)
    .then(newTodo => res.json(newTodo))
    .catch(err => console.log(err));
};

exports.showTodo = (req, res) => {
  db.Todos.findById({ _id: req.params.todoId })
    .then(todo => res.json(todo))
    .catch(err => console.log(err));
};

exports.updateTodo = (req, res) => {
  db.Todos.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(updatedTodo => res.json(updatedTodo))
    .catch(err => console.log(err));
};

exports.deleteTodo = (req, res) => {
  db.Todos.remove({ _id: req.params.todoId })
    .then(data => res.json(`${req.params.todoId} has been deleted.`))
    .catch(err => console.log(err));
};

module.exports = exports;
