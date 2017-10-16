"use strict";

process.env.AWS_DEFAULT_REGION = 'eu-west-1';
process.env.STAGE = 'dev';

const DB = require('s3-db');
const db = new DB();

var col;

db.getCollection('delmanorderss3db')
  .then(collection => {
    col = collection;
    var limit = 10;
    return col.find('crepemania', 10);
  })
  .then(items => {

    console.log('items:', items);
    console.log('items.hasMore:', items.hasMore);
    console.log('items.next:', items.next);
    console.log('continuationToken:', items.continuationToken);

    var promises = items.map(item => {
      return col.getHead(item.id);
    });

    console.log('num of items:', items.length);

    Promise.all(promises)
      .then(results => {
        // console.log('results:', results);
        return items[0].getDocument();
      })
      .catch(err => {
        console.log(err);
      });
    // console.log('items:', items);
  })
  .then(doc => console.log('doc:', doc))
  .catch(err => console.log(err));
