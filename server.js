const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config()
const routes = require('./backend/routes')
const app = express();

mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => console.log('Connected to Database!'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api', routes)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});