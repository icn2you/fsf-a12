const orm = require('../config/orm');

module.exports = (() => {
  const burger = {
    all: (cb) => {
      orm.selectAll('burgers', (res) => {
        cb(res);
      });
    },

    create: (val, cb) => {
      orm.insertOne('burgers', 'burger_name', val, (res) => {
        cb(res);
      });
    },

    update: (col, val, filter, cb) => {
      orm.updateOne('burgers', col, val, filter, (res) => {
        cb(res);
      })
    }
  };

  return burger;
})();
