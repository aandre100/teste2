const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
  if(err){
    console.log("Unable to connect to database");
  }
  console.log("Connected do database!")


// db.collection('Users').deleteMany({name: "Mike"}).then((result) =>{
//   console.log(result)
// }, (err) => {
//   console.log(err)
// });


db.collection('Users').findOneAndDelete({ _id: new ObjectID("5af4502607fcf8d461b55c05")}).then((result) => {
  console.log(result)
}, (err) => {
console.log(err);
});
  db.close();
});
