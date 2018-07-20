const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use('/assets', express.static('dist'));

app.get('/', (req, res) => res.render('./templates/index'));

app.listen(8080, () => console.log('app is running!'));
