const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to mongodb Succes');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Api
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(8800, () => {
  console.log('Backend server, Api chat realtime is Running ');
});

//https://youtu.be/ldGl6L4Vktk?list=PLj-4DlPRT48lXaz5YLvbLC38m25W9Kmqy&t=793
