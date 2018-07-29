const bodyParser = require('body-parser')
const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

const routes = require('./routes');

app.use(bodyParser.json());
app.use('/', express.static('dist'));


routes(app);

app.listen(8080, () => console.log('app is running!'));
