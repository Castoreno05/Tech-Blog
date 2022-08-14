const express = require('express');
const routes = require('./controllers/index')
// Importing sequelize connection
const sequelize = require('./config/connection')
const app = express();
// Establishing port
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening at port ${PORT}!`));
})