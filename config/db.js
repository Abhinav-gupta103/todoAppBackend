const mongoose = require("mongoose");

const database = (module.exports = () => {
  const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  const dbUrl =
    "mongodb+srv://guptaabhinav103:Mf0DEAaXEq3FPQB4@cluster0.1xnaqcp.mongodb.net/todo?retryWrites=true&w=majority";
  mongoose
    .connect(dbUrl, connectionParams)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((e) => {
      console.log(e);
      console.log("Database connection failed");
    });
});

database();
