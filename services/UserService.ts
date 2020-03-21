import {IContact} from "../models";
const smsApiConfig = require("../config/keys/smsApiKey");
const axios = require('axios');

export default class InfectionChainService {

	constructor(
		readonly userId: string,
		readonly requestTime: Number = Date.now()) {}

	public getNumberOfContactedUsers(): void {
	}
}
