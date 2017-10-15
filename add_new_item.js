"use strict";

const DB = require('s3-db');
const db = new DB();

var col;

db.getCollection('delmanorderss3db')
  .then( collection => {
    col = collection;
    col.saveDocument({name: 'y', id: 'some_id'});
  })
  .then( () => col.saveDocument({name: 'y'}))
  .then( () => col.saveDocument({name: 'x', id: 'meta'}, {key1: 'value1', key2: 'value2'}))
  .then( () => console.log('Success'))
  .catch(err => console.log(err));
