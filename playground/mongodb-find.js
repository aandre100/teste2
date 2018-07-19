
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
  if (err){
    console.log('cannot connect to database')
  }
  var db = client.db('TodoApp');

  db.collection('Todo').find({
    "idade": "38"
  }).toArray().then((results)=>{
    console.log(results);
  })
  client.close();
})
