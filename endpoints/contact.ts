import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.post("/", async (req: Request, res: Response) => {
		const { userId, contactPointId, directUserId } = req.body;
		if (userId && contactPointId) {
			// TODO create new Contact
		} else if (userId && directUserId) {
			// TODO create new ContactPoint
			// TODO create two new Contacts
		} else {
			return res.status(400).send('Bad Input Parameter');
		}

		// TODO send new Contact
		res.send({});
	})
	.post("/", async (req: Request, res: Response) => {
		const { userId, contactPointId } = req.body;
		// TODO create new Contact
		res.send({});
	})
;
