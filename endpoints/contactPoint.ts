import {Request, Response} from "express";
const express = require("express");
const router = express.Router();
const ContactPointService = require("../services/ContactPointService");

module.exports = router
	.get("/:id", async (req: Request, res: Response) => {
		res.send(ContactPointService.getContactPoint());
	})
	.post("/", async (req: Request, res: Response) => {
		res.send(ContactPointService.createContactPoint());
	})
	.post("/:id/currentSafetyLevel", async (req: Request, res: Response) => {
		res.send(ContactPointService.getCurrentSafetyLevel());
	})
	.get("/:id/lastCheckinOfInfectedUser", async (req: Request, res: Response) => {
		res.send(ContactPointService.getLastCheckinOfInfectedUser());
	});
