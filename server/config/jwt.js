const ExtractJwt = require('passport-jwt').ExtractJwt;

module.exports = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: process.env.APP_KEY,
  issuer: process.env.APP_HOST,
};
