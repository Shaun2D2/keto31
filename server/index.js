const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bodyParser = require('body-parser');
const passport = require('passport');
const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config();

const db = require('./database/connection');

app.use(bodyParser.json());
app.use('/', express.static('dist'));

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: process.env.APP_KEY,
  issuer: process.env.APP_HOST,
  audience: process.env.APP_HOST,
}

passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    const params = {
        TableName: 'Keto31.Users',
        Key: {
          Email: jwt_payload.sub
        }
    };

    try {
        const user = await db.get(params);

        if(User.Item) {
            return done(null, User.Item);
        }

        return done(null, false);

    } catch (e) {
        return done(err, false);
    }
}));

app.use(passport.initialize());

require('./routes')(app);

app.listen(8080, () => console.log('app is running!'));
