var express = requre('express');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

// var newTodo = new Todo({
//   text: 'cena para fazer',
// });
//
// newTodo.save().then((cena)=>{
//   console.log('inserted into database', cena);
// }, (e)=>{
//   console.log('Unable to insert Todo', e);
// });
//
// var newUser = new User({
//   email: 'andre@spzn.pt'
// });
//
// newUser.save().then((cena2)=>{
//   console.log('inserted sucessfully', cena2)
// }, (e)=>{
// console.log('erro falal ao inserir na bd', e)
// });


var app = express();

app.listen(3000, ()=>{
  console.log('server runing on port 3000!!!')
})
