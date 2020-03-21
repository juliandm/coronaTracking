import {Request, Response} from "express";
const express = require("express");
const router = express.Router();

module.exports = router
	.get("/:id", async (req: Request, res: Response) => {
		// TODO gets the tracking point
		res.send({});
	})
	.post("/", async (req: Request, res: Response) => {
		// TODO Create new trackingPoint
		res.send({});
	})
	.post("/:id/currentSafetyLevel", async (req: Request, res: Response) => {
		// TODO Create new trackingPoint
		res.send({});
	})
	.get("/:id/lastCheckinOfInfectedUser", async (req: Request, res: Response) => {
		// TODO gets the tracking point
		res.send({});
	});
