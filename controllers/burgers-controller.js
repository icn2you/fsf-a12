// Require dependencies.
const router = require('express').Router(),
      burger = require('../models/burger');

// Create app routes.
module.exports = (() => {
  // GET
  router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObj = { burger: data };

      // DEBUG:
      console.log(`hbsObj = ${JSON.stringify(hbsObj)}`);

      res.render('index', hbsObj);
    });
  });

  // POST
  router.post('/', (req, res) => {
    const newBurger = req.body.name;

    // DEBUG:
    console.log(`newBurger = ${newBurger}`);

    burger.create(newBurger, (result) => {
      // DEBUG:
      console.log(`result = ${JSON.stringify(result)}`);

      if (result.affectedRows === 0) {
        return res.status(500).end();
      }

      res.json({ id: result.insertId });
    });
  });

  router.put('/:id', (req, res) => {
    const burgerName = req.params.name,
          condition = `id = ${req.params.id}`;

    // DEBUG:
    console.log(`condition = ${condition}`);

    burger.update(burgerName, condition, (result) => {
      if (result.changedRows === 0) {
        // ASSERT: Burger not found.
        return res.status(404).end();
      }

      // OK
      res.status(200).end();
    });
  });

  return router;
})();
