const express = require('express');
const app = express();
const router = require('./config/router');
const {port, dbURI} = require('./config/environment');
const bodyParser = require('body-parser');
const errorHandler = require('./lib/errorHandler');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use('/api', router);
app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.use(errorHandler);


app.listen(port, () => console.log(`Up and rolling on ${port}`));
module.exports = app;

// setting the work to be done , firstly check on secure routing and add the testing
// focus on adding the feature of more data from API aswelll as cross user utility .

// clean code out and review other.
