// 'use strict'
const express = require('express');
const bodyParser = require('bodyParser');
const reactfire = require('reactfire');
const http = require('http');
// const hostname = '127.0.0.1';
const port = process.env.API_PORT || 3000;

const app = express();
const router = express.Router();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader(‘Access-Control-Allow-Origin’, ‘*’);
  res.setHeader(‘Access-Control-Allow-Credentials’, ‘true’);
  res.setHeader(‘Access-Control-Allow-Methods’, ‘GET,HEAD,OPTIONS,POST,PUT,DELETE’);
  res.setHeader(‘Access-Control-Allow-Headers’, ‘Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers’);
//and remove cacheing so we get the most recent comments
  res.setHeader(‘Cache-Control’, ‘no-cache’);
  next();
})

router.get('/', function(req, res) {
  res.json({message: 'API Initialized'});
  res.render('index', { title: 'Homepage'});
});
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('content-type', 'text/plain');
//   res.end('hello world');
// });
//
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCmWGnSUnz12rj-06NqFz_d9p-YnTQse88",
//   authDomain: "gardenia-ddbf8.firebaseapp.com",
//   databaseURL: "https://gardenia-ddbf8.firebaseio.com",
//   projectId: "gardenia-ddbf8",
//   storageBucket: "gardenia-ddbf8.appspot.com",
//   messagingSenderId: "808632105888"
// };
// firebase.initializeApp(config);
