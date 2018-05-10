const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) =>{
  if (err){
    console.log('cannot connect to database')
  }
console.log('connected to mongo database!')


db.collection('Users').findOneAndUpdate({
  _id: new ObjectID("5af415ac615e8b4d2ee86e4c")
}, {
  $set: {
    name: "Luis"
  }, $inc: {
    age: -2
  }
}, {returnOriginal: false
}).then((result) => {
  console.log(result)
});


db.close();
});
