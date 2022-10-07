const db = require('../models');
const logger = require('../utils/logger');

const connection = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    logger.info('Successfully connected with Database...');
  } catch (err) {
    logger.info('Unable to connect with Database: ', err);
  }
};

module.exports = connection;
