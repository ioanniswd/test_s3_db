"use strict";

const DB = require('s3-db');
const db = new DB();

db.getCollection('users')
  .then( users => users.getDocument('my-user'))
  .then( user => {user.age = 32; return user;})
  .then(user => user.save() );
