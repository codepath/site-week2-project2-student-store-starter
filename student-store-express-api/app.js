const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const store = require('./routes/store');

app.use(morgan('tiny'));
app.use(bodyParser.json());

// mount router to /store endpoint
app.use('/store', store);


app.get('/', (req, res) => {
	res.status(200).send({'ping': 'pong'});
});

module.exports = app;
