const express = require('express');
const app = express();
const db = require('./db/db');
const seatsRoutes = require('./routes/seats');
//const authRoutes = require('./routes/auth');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// database
db;

// routes
app.use('/api/seats', seatsRoutes);
//app.use('/api/auth', authRoutes);

// Port
app.listen(8000, () => {
  console.log('Port is running on 8000');
});