const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./utils/logger');
const connection = require('./config/connection');
const routes = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/api', routes);

const port = 4001;
connection();
app.listen(port, () => logger.info(`Listening on port ${port}...`));
