const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidatior = require('express-validator');
//Routes
const userRoutes = require('./routes/user');
const authRoutes = require('./routes/auth');

//app
const app = express();
//db
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log('mongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });

//middlewares
app.use(morgan('dev'));
app.use(expressValidatior());
app.use(bodyParser.json());

//routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is listening on port http://localhost:${port}`);
});
