const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
  if (err){
    return console.log(err)
  }

  var db = client.db('TodoApp');
db.collection('Todo').findOneAndUpdate({
  _id: new ObjectID('5b4e0c9e21fe0e69af8871c4')
}, { $set: {nome: "Elisangela"}, $inc: { idade: -1}}, { returnOriginal: false}).then((result)=>{
  console.log(result);
})
})
