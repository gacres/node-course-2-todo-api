const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the TodoApp MongoDb server');
  }
  console.log('Connected to TodoApp db successfully');

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //     console.log('Todos');
  //     console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch Todos', err);
  // });

  db.collection('Todos').find().count().then((count) => {
      console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('unable to fetch Todos', err);
  });

  //db.close();
});
