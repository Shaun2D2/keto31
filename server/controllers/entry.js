const db = require('../database/connection');
const uuidv4 = require('uuid/v4');
const moment = require('moment');

const controller = {
  async index(req, res) {
    var params = {
      TableName: 'Keto31.CarbEntry',
      FilterExpression: 'UserId = :userid',
      ExpressionAttributeValues: {
        ':userid': '001' // replace with a real user ID
      }
    };
    try {

      const entries = await db.scan(params).promise();

      res.status(200).json(entries.Items);
    } catch (e) {
      res.status(500).json({
        record: params,
        error: e
      });
    }
  },
  async create(req, res) {
    const { carbCount } = req.body;

    const currentDate = moment().unix();

    const params = {
      TableName: 'Keto31.CarbEntry',
      Item: {
        EntryId: uuidv4(),
        UserId: '001', // this will eventually be replaced with a real user ID
        CarbCount: carbCount,
        CreatedAt: currentDate,
        UpdatedAt: currentDate
      }
    };

    try {
      await db.put(params).promise();

      res.status(201).json(params.Item);
    } catch (e) {
      res.status(500).json({
        record: params,
        error: e
      });
    }
  },
  async update(req, res) {
    const { carbCount } = req.body;
    const { id } = req.params;

    const currentDate = moment().unix();

    const params = {
      TableName: 'Keto31.CarbEntry',
      Key: { EntryId : id },
      UpdateExpression: 'set CarbCount = :count, UpdatedAt = :updated',
      ExpressionAttributeValues: {
        ':count': carbCount,
        ':updated': currentDate
      },
      ReturnValues: 'ALL_NEW'
    };

    try {
      const record = await db.update(params).promise();

      res.status(201).json(record.Attributes);
    } catch (e) {
      res.status(500).json({
        record: params,
        error: e
      });
    }
  },
  async remove(req, res) {
    const { id } = req.params;

    const params = {
      TableName: 'Keto31.CarbEntry',
      Key: {
        EntryId: id
      }
    };

    try {
      await db.delete(params).promise();

      res.status(200).json({ operation: 'OK' });
    } catch (e) {
      res.status(500).json({
        record: params,
        error: e
      });
    }
  }
};

module.exports = controller;
