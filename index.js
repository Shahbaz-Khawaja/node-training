const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const logger = require('./utils/logger');
const db = require('./models');
const routes = require('./routes');
app.use(bodyParser.json());

db.sequelize
  .authenticate()
  .then(async () => {
    await db.sequelize.sync();
    logger.info('Sequelize connection has been established ......');
  })
  .catch((err) => {
    logger.info('Unable to connect to the database:', err);
  });

app.use('/api', routes);
app.listen(4001, () => logger.info('Listening on port 4001.'));

// const courses = [
//   { id: 1, name: 'course1' },
//   { id: 2, name: 'course2' },
//   { id: 3, name: 'course3' },
// ];

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// app.get('/api/courses', (req, res) => {
//   res.send(courses);
// });

// app.get('/api/courses/:id', (req, res) => {
//   const course = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );

//   if (!course) res.status(400).send('Course does not exist');
//   res.send(course);
// });

// app.put('/api/courses/:id', validate(schema), (req, res) => {
//   const { name, hrs } = req.body;
//   const course = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );

//   if (!course) return res.status(400).send('Course does not exist');
//   course.name = name;
//   course.hrs = hrs;
//   res.send(course);
// });

// app.post('/api/courses', validate(schema), (req, res) => {
//   const { name, hrs } = req.body;
//   const course = {
//     id: courses.length + 1,
//     name,
//     hrs,
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.delete('/api/courses/:id', (req, res) => {
//   const course = courses.find(
//     (course) => course.id === parseInt(req.params.id)
//   );
//   if (!course) return res.status(400).send('Course does not exist');

//   const index = courses.indexOf(course);
//   courses.splice(index, 1);
//   res.send(course);
// });
