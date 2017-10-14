"use strict";

const DB = require('s3-db');
const db = new DB();

var col;

db.getCollection('del_man_orders_s3_db')
  .then(collection => {
    col = collection;
    return col.find('some');
  })
  .then(items => {
    console.log('items:', items);
    return items[0].getDocument();
  })
  .then(doc => console.log('doc:', doc))
  .catch(err => console.log(err));
