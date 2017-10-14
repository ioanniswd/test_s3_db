"use strict";

const DB = require('s3-db');
const db = new DB();

db.getCollection('del_man_orders_s3_db')
  .then( col => col.saveDocument({name: 'y', id: 'some_id'}))
  .then( col => col.saveDocument({name: 'y'}))
  .then(() => console.log('Success'))
  .catch(err => console.log(err));
