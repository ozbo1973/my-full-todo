const express = require("express"),
  db = require("../models"),
  r = require("../helpers/routes");

const router = express.Router();

router
  .route("/")
  .get(r.getTodos)
  .post(r.createTodo);

router
  .route("/:todoId")
  .get(r.showTodo)
  .put(r.updateTodo)
  .delete(r.deleteTodo);

module.exports = router;
