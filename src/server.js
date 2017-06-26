const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain');
  res.end('hello world');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// Initialize Firebase
var config = {
  apiKey: "AIzaSyCmWGnSUnz12rj-06NqFz_d9p-YnTQse88",
  authDomain: "gardenia-ddbf8.firebaseapp.com",
  databaseURL: "https://gardenia-ddbf8.firebaseio.com",
  projectId: "gardenia-ddbf8",
  storageBucket: "gardenia-ddbf8.appspot.com",
  messagingSenderId: "808632105888"
};
firebase.initializeApp(config);
