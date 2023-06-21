const router = require("express").Router();
const TodoController = require("../controller/todoController");

router.post("/create-todo", TodoController.createTodo);
router.post("/getUserTodos", TodoController.getUserTodos);
router.delete("/deleteTodo", TodoController.deleteTodo);

module.exports = router;
