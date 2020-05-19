const conn = require('./connection');

module.exports = (() => {
  const orm = {
    conn: conn,

    selectAll: (table, cb) => {
      const sqlQuery = `SELECT * FROM ${table};`;

      // DEBUG:
      console.log(`sqlQuery = ${sqlQuery}`);

      conn.query(sqlQuery, (err, res) => {
        if (err) { throw err; }

        cb(res);
      });
    },

    insertOne: (table, col, val, cb) => {
      const sqlQuery = `INSERT INTO ${table} (${col}) VALUES ('${val}');` 

      // DEBUG:
      console.log(`sqlQuery = ${sqlQuery}`);

      conn.query(sqlQuery, (err, res) => {
        if (err) { throw err; }

        cb(res);
      });
    },

    updateOne: (table, col, val, filter, cb) => {
      const sqlQuery = `UPDATE ${table} SET ${col} = ${val} WHERE id = ${filter};`;

      // DEBUG:
      console.log(`sqlQuery = ${sqlQuery}`);

      conn.query(sqlQuery, (err, res) => {
        if (err) { throw err; }

        cb(res);
      });
    }
  };

  return orm;
})();
