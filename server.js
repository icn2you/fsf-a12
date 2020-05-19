// Node dependencies
const express = require("express"),
      exphbs = require('express-handlebars'),
      morgan = require('morgan');

// Local resources
const routes = require('./controllers/burgers-controller');

// HTTP port
const PORT = process.env.PORT || 3000;

// Create app and march on!
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

// Set up handlebars.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
  console.log(`Eat-Da-Veggie-Burger app listening at //localhost:${PORT} ...`);
});
