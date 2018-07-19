const {MongoClient, ObjectID} = require('mongodb');
var user = {name: 'andrew', age: 25};
var {name} = user;
console.log(name);



MongoClient.connect('mongodb://localhost:27017', (err, client) => {

if (err){
  console.log('Unable to connect to database')
}
var db = client.db('TodoApp');
console.log('connected to database');

var obj = new ObjectID();

console.log(obj);
// db.collection('Todo').insertOne({
//   nome: 'José',
//   idade: '38',
//   localidade: 'Porto'
// }, (err, result) => {
// if (err) {
//   return console.log('unable to insert record', err)
// }
//console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));

client.close();

});
