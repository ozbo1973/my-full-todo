//express index

const express = require("express"),
  bodyParser = require("body-parser"),
  todoRoutes = require("./routes");

const app = express(),
  PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("TODO APP API");
});

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
