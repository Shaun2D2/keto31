const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const moment = require('moment');

const db = require('../database/connection');

const controller = {
  async create(req, res) {
    const { FirstName, LastName, Password, Email, DailyGoal } = req.body;

    const hashedPassword = await bcrypt.hash(Password, 10);

    const params = {
      TableName: 'Keto31.Users',
      Item: {
        FirstName,
        LastName,
        Password: hashedPassword,
        Email: Email.toLowerCase(),
        DailyGoal,
      }
    };

    try {
      await db.put(params).promise();

      const exp = moment().add(14, 'days').unix();

      const token = jwt.sign({
        sub: params.Item.Email,
        iss: process.env.APP_HOST,
        exp
      }, process.env.APP_KEY);

      res.status(201).json({ token, expiration: exp });
    } catch(e) {
      res.status(500).json({
        record: params,
        error: e
      });
    }

  }
};

module.exports = controller;
