const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'task-manager';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(async function (err) {
  //   assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = await client.db(dbName);
  const users = db.collection('users');
  const tasks = db.collection('tasks');

  // const data=await tasks.find({"completed":false}).toArray().then((value)=>console.log(value))
  try {
    tasks.updateMany({ completed: false }, {
      $set: {
        completed: true
      }
    }).then((result) => console.log(result)).catch((e) => console.log(e))
  } catch (e) {

  }

  client.close()
})

