"use strict";

// process.env.AWS_DEFAULT_REGION = 'eu-west-1';

const DB = require('s3-db');
const db = new DB();
// console.log('db:', db);


db.createCollection('del_man_orders_s3_db')
  .then(() => console.log('success'))
  .catch(err => console.log('err:', err));
