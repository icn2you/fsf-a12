const orm = require('../config/orm');

module.exports = (() => {
  const burger = {
    // Select all burgers in database.
    all: (cb) => {
      orm.selectAll('burgers', (res) => {
        cb(res);
      });
    },

    // Create a new burger in database.
    create: (val, cb) => {
      orm.insertOne('burgers', 'burger_name', val, (res) => {
        cb(res);
      });
    },

    // Update specified burger to devoured.
    update: (col, val, filter, cb) => {
      orm.updateOne('burgers', col, val, filter, (res) => {
        cb(res);
      })
    }
  };

  return burger;
})();
