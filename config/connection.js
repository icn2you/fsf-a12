// Require .env file for db passwd.
require('dotenv').config({ path: `${__dirname}/../.env` });

// Set up MySQL connection.
const mysql = require("mysql");

// Export connection for ORM to use.
module.exports = (() => {
  const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.MYSQL_DB_ROOT_PASSWD,
    database: 'burgers_db'
  });

  // Make connection to database.
  conn.connect(err => {
    if (err) {
      console.error(`Error connecting to database: ${err.stack}`);
      
      // Terminate app if error occurs connecting to database.
      process.exit(1);
    }

    console.log(`Connected to database on thread ${conn.threadId}.`);
  });

  return conn;
})();
