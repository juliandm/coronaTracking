const express = require('express');
const apis = require('./endpoints');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const logger = require('../server/logger');
const config = require('config');

(function start() {
	// DB Connect

	// Parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	// CORS
	app.use(cors({
		origin: config.get("appHost"),
	}));
	// Apis
	app.use('/api', apis);

	app.listen(config.get("apiPort"), config.get("apiHost"), () => {
		console.log("api Started", config.get("apiHost"), config.get("apiPort"))
	});
})();