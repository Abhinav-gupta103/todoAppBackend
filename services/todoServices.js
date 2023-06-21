const TodoModel = require("../models/todoModel");

class TodoServices {
  static async createTodo(userId, title, description) {
    const createTodo = new TodoModel({ userId, title, description });
    return await createTodo.save();
  }
  static async getUserTodos(userId) {
    try {
      return await TodoModel.find({ userId: userId });
    } catch (err) {
      throw err;
    }
  }
  static async deleteTodo(todoId) {
    try {
      return await TodoModel.findOneAndDelete({ _id: todoId });
    } catch (err) {
      throw err;
    }
  }
}

module.exports = TodoServices;
