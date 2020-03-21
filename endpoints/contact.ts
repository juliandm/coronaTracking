import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.post("/", async (req: Request, res: Response) => {
		const { userId, contactPointId } = req.body;
		// TODO create new Contact
		res.send({});
	});
