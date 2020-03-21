import "reflect-metadata"
const express = require('express');
const apis = require('./endpoints');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const config = require('config');
import {getConnection} from "./db/connection";

(function start() {
	// DB Connect
	let connection = getConnection();

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
