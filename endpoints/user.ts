import {Request, Response} from "express";
import InfectionService from "../services/InfectionService";

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const nanoid = require('nanoid');

const generateToken = (user) => ({
	id: user._id,
	token: nanoid(48),
	ttl: 1800000,
});


// User Api
module.exports = router
	.get('/', async (req: Request, res: Response) => {
		const { id } = req.body;

		// TODO get User by id
		res.send({});
	})
	.post('/', async (req: Request, res: Response) => {
		const { phone, infectionStatus = false, id, firstName, lastName } = req.body;
		if (id) {
			if (infectionStatus) {
				InfectionService.sendUpdateForPossiblyInfected(req.body)
			}
			// TODO update user
		} else {
			// TODO create user
		}

		res.send({});
	});



