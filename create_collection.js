"use strict";

const DB = require('s3-db');
const db = new DB();

db.createCollection('del_man_s3_db')
  .then(() => console.log('arguments:', arguments))
  .catch(err => console.log('err:', err));
