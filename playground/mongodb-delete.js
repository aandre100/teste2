//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);




MongoClient.connect('mongodb://127.0.0.1:27017/Todos', (err, db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//   console.log(result)
// }, (error) =>{
//   console.log("unable to delete", error)
// });

//deleteOne
// db.collection('Todos').deleteOne({ "_id" : new ObjectID("5af3263cfd12df39902566d9")}).then((result) => {
//   console.log(result)
// }, (err) => {
// console.log('Unable to delete record', err);
// });


//findOneAndDelete

db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
console.log(result)
}, (err) => {
console.log(err);  
})







// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
//
// }, (err, result) => {
//   if (err){
//     return console.log('Unable to insert todo', err);
//   }
//   console.log(JSON.stringify(result.ops, undefined, 2));
// });
// db.collection('Users').insertOne({
//   name: 'André Cardoso',
//   age: 39,
//   location: 'Porto'
// }, (err, result) => {
//   if (err){
//     return console.log('Unable to insert user', err);
//   }
//   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined,2))
// });

  db.close();
});
