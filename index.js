const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// routes
const userRoute = require('./routes/users');


dotenv.config();

mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB');
})

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// router middlewares
app.use('/api/users', userRoute);


app.listen(8800, () => {
    console.log('Server is running on port 8800');
});