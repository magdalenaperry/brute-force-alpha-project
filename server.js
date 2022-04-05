const express = require('express');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})

const routes = require('/controllers');

const app = express();
const PORT = process.env.PORT || 3001
const sequelize = require('/config/connection');

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({
  force: false
}).then(() => {
  app.listen(PORT, () => {
    console.log(`running http://localhost:${PORT}`)
  });
});
