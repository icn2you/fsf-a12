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

    update: (val, filter, cb) => {
      orm.updateOne('burgers', 'burger_name', val, filter, (res) => {
        cb(res);
      })
    }
  };

  return burger;
})();
