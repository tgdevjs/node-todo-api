const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // delete Many
  // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
  //   console.log(result);
  // });

  // delete One
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete: remove an individual one and also return those values
  // so you can tell the user which document was deleted
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
    console.log(result);
  });
  db.collection('Todos').findOneAndDelete({_id: new ObjectID("582b66193ab6d110adb66449")}).then((result) => {
    console.log(result);
  });



  // db.close();
});
