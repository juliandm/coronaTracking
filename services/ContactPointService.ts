import {ContactPoint, IContact, IContactPoint, IUser, User} from "../models";
const smsApiConfig = require("../config/keys/smsApiKey");
const axios = require('axios');

export default class ContactPointService {

	constructor(
		readonly userId: string,
		readonly contactPointId: string,
		readonly requestTime: Number = Date.now()) {}

	public static getContactPoint(): IContactPoint {
		return new ContactPoint();
	};
	public static createContactPoint(): void {};

	public isSafe(): Boolean {
		return true;
	}

	private getInfectedCheckins(): Array<IContact> {
		// fetch contacts from now - INTERVAL
		const possiblyInfectedUsers: Array<IContact> = [];

		return [];
	}

}
