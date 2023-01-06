const http = require('http');
const port = 3000;
const express = require('express');
const app = express();
const json = express.json();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
