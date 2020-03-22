import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.get("/", async (req: Request, res: Response) => {
		const { id } = req.body;
		// TODO get contact point by id
		res.send();
	})
	.post("/", async (req: Request, res: Response) => {
		const { id, user } = req.body;
		// TODO create contact point by id
		res.send();
	});
