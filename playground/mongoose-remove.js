const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '582e2e5e3ab6d110adb6644c'}).then((todo) => {
  
});
Todo.findByIdAndRemove('582e2e5e3ab6d110adb6644c').then((todo) => {
  console.log(todo);
});
