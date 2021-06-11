var express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

var app = express();

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// body-parser code for JSON data
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/api/example', (req, res) => {
  res.json({message: "this was sent from the server"});
});

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'))
// });

app.use(
  session({
    secret: 'secret',
    name: 'session_data',
    resave: true,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      // maxAge: 600000 //10 minutes
      maxAge: 365 * 24 * 60 * 60 * 1000, // one year
    },
  }),
);

const port = process.env.PORT || 5000;

let loginRouter = require('./routers/loginRouter');
let homeRouter = require('./routers/homeRouter');
let tickerRouter = require('./routers/tickerRouter');

app.use(loginRouter);
app.use(homeRouter);
app.use(tickerRouter);


app.listen(port);

console.log(`goodStonks listening on port ${port}`);