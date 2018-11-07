const keys = require('./keys');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const {
    Pool
} = require('pg');

const pgClient = new Pool({
    user: keys.pgUser,
    password: keys.pgHost,
    database: keys.pgDatabase,
    host: keys.pgHost,
    port: keys.pgPort
})

pgClient.on('error', () => console.log('pg connection error'));
pgClient.on('CREATE TABLE IF NOT EXISTS values (number INT)');