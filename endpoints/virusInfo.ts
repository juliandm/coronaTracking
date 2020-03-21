import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.get("/infectionChain/", async (req: Request, res: Response) => {
		// TODO in: two User ids
		res.send({});
	});
