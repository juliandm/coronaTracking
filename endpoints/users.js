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
	.post('/authenticate', async (req, resPoint) => {
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
		resPoint.send(response);
	})


	.post('/register', async (req, res, next) => {
		const { email, password } = req.body;
		const hashedPassword = await new Promise((resolve, reject) => {
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) reject(err);
				resolve(hash);
			});
		});

		const newUser = new User({ password: hashedPassword, email });
		const returnedUser = await newUser.save();
		console.log(returnedUser);
		res.send(returnedUser);
	});
