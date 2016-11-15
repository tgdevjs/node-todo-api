const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Walk the dog',
  //   completed: true
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // })

  // Insert new doc into Users (name, age, location)
  db.collection('Users').insertOne({
    name: 'Name5',
    age: 'Age1',
    location: 'Location1'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert todo', err);
    }
    // console.log(JSON.stringify(result.ops, undefined, 2));
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  });


  db.close();
});
