import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.get("/virusStatus/:id", async (req: Request, res: Response) => {
		// TODO gets the boolean for status
		res.send({});
	})
	.get("/infectionChain/:id/", async (req: Request, res: Response) => {
		// TODO
		res.send({});
	});
