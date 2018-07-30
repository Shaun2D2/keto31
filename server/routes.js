const path = require('path');
const passport = require('passport');
const userController = require('./controllers/user');
const entryController = require('./controllers/entry');
const loginController = require('./controllers/login');
const registerController = require('./controllers/register');

const routes = (app) => {
  /**
   * carb diary
   *
   */
  app.get('/api/entry', passport.authenticate('jwt', { session: false }), entryController.index);
  app.post('/api/entry', passport.authenticate('jwt', { session: false }),entryController.create);
  app.put('/api/entry/:id', passport.authenticate('jwt', { session: false }),entryController.update);
  app.delete('/api/entry/:id', passport.authenticate('jwt', { session: false }),entryController.remove);

  /**
   * user registration
   *
   */
  app.post('/api/register', registerController.create);

  /**
   * user login
   *
   */
  app.post('/api/login', loginController.index);

  /**
   * get user singleton
   *
   */
  app.get('/api/user', passport.authenticate('jwt', { session: false }), userController.show);

  /**
   * base route for the frontend application
   *
   */
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../dist/index.html')));
};

module.exports = routes;
