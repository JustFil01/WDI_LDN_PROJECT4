const express = require('express');
const app = express();
const router = require('./config/router');
const {port, dbURI} = require('./config/environment');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use('/api', router);

app.listen(port, () => console.log(`Up and rolling on ${port}`));

module.exports = app;

//start by layinout the routes and setting up basic page navigation from home
// to Login to game index game show user show contact/add
