const TodoServices = require("../services/todoServices");

exports.createTodo = async (req, res, next) => {
  try {
    const { userId, title, description } = req.body;
    let todo = await TodoServices.createTodo(userId, title, description);
    res.json({ status: true, success: todo });
  } catch (err) {
    next(err);
  }
};

exports.getUserTodos = async (req, res, next) => {
  try {
    const { userId } = req.body;
    let todoList = await TodoServices.getUserTodos(userId);
    res.json({ status: true, success: todoList });
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { todoId } = req.body;
    let deleteTodo = await TodoServices.deleteTodo(todoId);
    res.json({ status: true, success: deleteTodo });
  } catch (err) {
    next(err);
  }
};
