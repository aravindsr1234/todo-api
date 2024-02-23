const express = require('express');
const app = express();
const connectDb = require('./server/database/database');
var cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('dotenv').config();

connectDb();

app.use('/', require('./server/router/router'));

const port = process.env.port;

app.listen(port, () => {
    console.log('server is running');
})