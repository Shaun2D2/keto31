const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const db = require('../database/connection');

module.exports = {
  async index(req, res) {
    const { Email, Password } = req.body;

    const params = {
      TableName: 'Keto31.Users',
      Key: {
        Email: Email
      }
    };

    try {
      const user = await db.get(params).promise();

      if(user.Item && await bcrypt.compare(Password, user.Item.Password)) {

        const exp = moment().add(14, 'days').unix();

        const token = jwt.sign({
          sub: user.Item.Email,
          iss: process.env.APP_HOST,
          exp
        }, process.env.APP_KEY);

        return res.status(200).json({ token, exp });
      }

      return res.status(401).json({ message: 'authentication failed!' });
    } catch (e) {
      res.status(401).json({ message: 'authentication failed', error: e });
    }
  }
};
