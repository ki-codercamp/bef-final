var mongodb = require('mongodb');

class Database {
  static connect(){
    return mongodb.MongoClient.connect('mongodb://ken:123@ds135983.mlab.com:35983/employer-final').then((db) => {
      console.log('db connected');
      this.db = db;
    })
  }
  constructor(db) {

  }
}

module.exports = Database;
