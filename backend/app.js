const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const carsRoutes = require('./routes/cars')
const app = express();
mongoose.connect("mongodb+srv://advanced_applications:zpARyW9V9EMNd6wz@cluster0.hjlul.mongodb.net/node-angular-react", 
{useNewUrlParser: true, useUnifiedTopology: true} )
// db.createCollection("cars")
// db.collection("animals").insertMany()
// db.animals.insertMany(imageUrl)

  .then(() => console.log("connected to mongoDB!!"))
  .catch(() => console.log('connection failed!!!'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, UPDATE, DELETE, PUT , OPTIONS");
  next();
}
);


// app.use("/api/posts", userRoutes);
app.use('/api/cars', carsRoutes);


module.exports = app;