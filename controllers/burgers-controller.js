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
      // console.log(`hbsObj = ${JSON.stringify(hbsObj)}`);

      res.render('index', hbsObj);
    });
  });

  // POST
  router.post('/', (req, res) => {
    const newBurger = req.body.name;

    // DEBUG:
    // console.log(`newBurger = ${newBurger}`);

    burger.create(newBurger, (result) => {
      // DEBUG:
      // console.log(`result = ${JSON.stringify(result)}`);

      if (result.affectedRows === 0) {
        // ASSERT: New burger not created in database.
        return res.status(500).end();
      }

      // ASSERT: New burger created in database.
      res.json({ id: result.insertId });
    });
  });

  router.put('/:id', (req, res) => {
    const burgerID = req.params.id,
          devoured = req.body.devoured;

    // DEBUG:
    // console.log(`burgerID = ${burgerID}`);

    burger.update('devoured', devoured, burgerID, (result) => {
      // DEBUG:
      // console.log(`result = ${JSON.stringify(result)}`);

      if (result.changedRows === 0) {
        // ASSERT: Burger not found.
        return res.status(404).end();
      }

      // ASSERT: Burger updated to devoured in database.
      res.sendStatus(200);
    });
  });

  return router;
})();
