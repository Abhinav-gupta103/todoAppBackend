const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routers/userRoutes");
const todoRoutes = require("./routers/todoRoutes");

const app = express();
app.use(bodyParser.json());
app.use("/", userRoutes);
app.use("/", todoRoutes);

module.exports = app;
