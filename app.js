var express = require('express');
const path = require('path');
const cors = require('cors');

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

app.get('/api/example', (req, res) => {
  res.json({message: "this was sent from the server"});
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'))
});

const port = process.env.PORT || 5000;

let loginRouter = require('./routers/loginRouter');
let homeRouter = require('./routers/homeRouter');

app.use(loginRouter);
app.use(homeRouter);


app.listen(port);

console.log(`goodStonks listening on port ${port}`);