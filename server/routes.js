const path = require('path');
const entryController = require('./controllers/entry');

const routes = (app) => {
  app.get('/api/entry', entryController.index);
  app.post('/api/entry', entryController.create);
  app.put('/api/entry/:id', entryController.update);
  app.delete('/api/entry/:id', entryController.remove);

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
}

module.exports = routes;
