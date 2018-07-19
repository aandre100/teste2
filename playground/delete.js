const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client)=>{
if (err){
  console.log(err)
}
var db = client.db('TodoApp');

db.collection('Todo').findOneAndDelete({_id: new ObjectID('5b50a21989a740d846f912a2')}).then((cena)=>{
  console.log(cena);
}, (err)=>{
  console.log(err);
})
});
