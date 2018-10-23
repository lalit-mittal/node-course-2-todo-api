// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if(err){
    return console.log('unable to connect with mongodb');
  }
  console.log('connected with mongodb');

  // db.collection('ToDos').find({
  //   _id: new ObjectID('5bcf8130d5566725706e49b1')
  // }).toArray().then((docs) => {
  //   console.log('ToDos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err) => {
  //   console.log('unable to fetch data', err);
  // });

  db.collection('Users').find({
    name: 'Lalit'
  }).toArray().then((docs) => {
    console.log('ToDos');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err) => {
    console.log('unable to fetch data', err);
  });

  // db.collection('ToDos').find().count().then((count) => {
  //   console.log(`todo count: ${count}`);
  //
  // },(err) => {
  //   console.log('unable to fetch data', err);
  // });
  db.close();
});
