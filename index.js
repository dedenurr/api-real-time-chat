const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const conversationRoute = require('./routes/Conversation');
const messageRoute = require('./routes/message');

dotenv.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('Connected to Database Succes');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// Api
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

app.listen(8800, () => {
  console.log('Backend server, Api chat realtime is Running ');
});
