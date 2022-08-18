const express = require("express");
const path = require("path");
// require template language
const exphbs = require("express-handlebars");
const routes = require("./controllers/index");
const session = require("express-session");

// Importing sequelize connection
const sequelize = require("./config/connection");
// Import SequelizeStore
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
// Establishing port
const PORT = process.env.PORT || 9001;

const hbs = exphbs.create({});

// Create session
const sess = {
  secret: "secret key",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Let express know which template engine to use
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening at port ${PORT}!`));
});
