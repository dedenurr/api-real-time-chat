const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to mongodb Succes');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.get('/', (req, res, next) => {
  res.send('welcome to api chat realtime');
});

app.get('/users', (req, res, next) => {
  res.send('welcome to users chat realtime');
});

app.listen(8800, () => {
  console.log('Backend server, Api chat realtime is Running ');
});
