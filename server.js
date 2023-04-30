const express = require('express');
const db = require('./config/connection');

const { Babylon } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({etended: true}));
app.use(express.json());


