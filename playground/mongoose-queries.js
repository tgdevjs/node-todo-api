const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Find todo
// var id = '682dd72949ae2841d24dcfaa11';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

// Find user
var id = '582c72946c1d972fd17301d5';

User.findById(id).then((user) => {
  if (!user) {
    console.log('User not found');
  }
  console.log('User by Id', JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));
