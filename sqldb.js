const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./db/inventory.db',  sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the inventory.db SQlite database.');
  });

  db.close((err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Close the database connection.');
  });