const JwtStrategy = require('passport-jwt').Strategy;
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');

require('dotenv').config();

const db = require('./database/connection');
const jwtConfig = require('./config/jwt');

const app = express();

passport.use(new JwtStrategy(jwtConfig, async (jwt_payload, done) =>{

  const params = {
    TableName: 'Keto31.Users',
    Key: {
      Email: jwt_payload.sub
    }
  };

  try {
    const user = await db.get(params).promise();

    if(user.Item) {
      return done(null, user.Item);
    }

    return done(null, false);

  } catch (e) {
    return done(e, false);
  }
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static('dist'));

app.use(passport.initialize());

require('./routes')(app);

app.listen(8080, () => console.log('app is running!')); // eslint-disable-line
