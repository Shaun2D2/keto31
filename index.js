const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('app is running'));

app.listen(8080, () => console.log('app is running!'));
