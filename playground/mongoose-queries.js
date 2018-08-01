const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id ='5b572dad4a624b597ab848cd';

// User.find({_id: id}).then((user) => {
//   console.log(user)
// }, (e) => {
//   console.log('Error with id', e)
// });

User.findById(id).then((user) => {
  if(!user){
  return  console.log('No user found')
  }
  console.log(JSON.stringify(user, undefined, 2))
}, (e) => {
  console.log(e);
});





































// var id = '5b608b88db3e1127524605eb';
// if (!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos)
// })
//
// Todo.findOne({
//   _id: id
//   }).then((todo) => {
//     if(!todo){
//       return console.log('Id not found');
//     }
//   console.log('Todo', todo)
//
// });
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));
