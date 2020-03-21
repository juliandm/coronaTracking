import {Request, Response} from "express";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const nanoid = require('nanoid');
const { User } = require('../models/User');

const generateToken = (user) => ({
	id: user._id,
	token: nanoid(48),
	ttl: 1800000,
});


// User Api
module.exports = router
	.post('/authenticate', async (req: Request, res: Response) => {
		const { email, password } = req.body;
		let response = {};

		// Fake Search query
		const user = await User.findOne({ email });

		if (user) {
			const PW_MATCH = await new Promise((resolve, reject) => {
				bcrypt.compare(password, user.password, (err, res) => {
					if (res && !err) {
						resolve(res);
					} else {
						reject(err);
					}
				});
			}).catch((e) => {
				console.log(e);
			});
			console.log(PW_MATCH);
			if (PW_MATCH) {
				response = generateToken(user);
			}
		}
		res.send(response);
	})
	.post('/register', async (req: Request, res: Response) => {
		const { phone, infectionStatus = false } = req.body;

		const newUser = new User({ phone, infectionStatus });
		const returnedUser = await newUser.save();
		res.send(returnedUser);
	})
	.get('/infectionStatus', async (req: Request, res: Response) => {
		// TODO gets the infection Status

		res.send();
	})
	.post('/infectionStatus', async (req: Request, res: Response) => {
		// TODO sets infection Status
		res.send();
	});



