"use strict";

const DB = require('s3-db');
const db = new DB();

var col;

db.getCollection('del_man_orders_s3_db')
  .then(collection => {
    col = collection;
    console.log('collection name', col.getName());
    return col.getDocument('some_id');
  })
  .then(doc => {
    console.log('document:', doc);
    return col.getHead('meta');
  })
  .then(meta => {
    console.log('metatags of meta:', meta);
    console.log('done');
    col.exists('meta');
  })
  .then(exists => {
    console.log('exists:', exists);
  })
  .catch(err => console.log(err));
