//Assign mongoose
const mongoose = require("mongoose");

mongoose.set('debug', true);
mongoose.connect("mongodb://localhost/express-todo-api", {
  useNewUrlParser: true
});
mongoose.Promise = Promise;


//Call todo file to assign
module.exports.Todo = require('./todo');
