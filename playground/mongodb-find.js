//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID();
console.log(obj);




MongoClient.connect('mongodb://127.0.0.1:27017/Todos', (err, db) => {
  if(err){
    console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//   db.collection('Todos').find({
//     _id: new ObjectID('5af40c28cf8bd546f6393001')
//   }).toArray().then((docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2))
// }, (err) => {
//   console.log('Unable to fetch todos', err);
// });

  db.collection('Todos').find().count().then((count) => {
  console.log(`Todos count: ${count}`);
}, (err) => {
  console.log('Unable to fetch todos', err);
});

db.collection('Users').find({name: 'Mike'}).toArray().then((docs) => {
  console.log("Users");
  console.log(JSON.stringify(docs, undefined, 2))
}, (err) => {
  console.log("Unable to fetch records", err);
})




//  db.close();
});
