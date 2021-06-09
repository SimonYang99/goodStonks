var express = require('express');
const path = require('path');
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/example', (req, res) => {
  res.json({message: "this was sent from the server"});
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

const port = process.env.PORT || 5000;

let routers = require('./routers/routers');
app.use(cors());
// app.use(express.urlencoded({ extended: false }));
app.use(routers);


app.listen(port);

console.log(`password generator listening on port ${port}`);