// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('unable to connect with mongodb');
  }
  console.log('connected with mongodb');

  // db.collection('ToDos').insertOne({
  //   text:'Something to do',
  //   completed:false
  // },(err,result) => {
  //   if(err){
  //     return console.log('unable to insert todos',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

db.collection('Users').insertOne({
  name:'Lalit Mittal',
  age: 25,
  location: 'Noida'
},(err,result) => {
  if(err){
      return console.log('unable to insert  Users',err);
  }
  console.log(JSON.stringify(result.ops,undefined,2));
});

  db.close();
});
