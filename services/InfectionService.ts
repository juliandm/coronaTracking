import {IContact} from "../models";
const smsApiConfig = require("../config/keys/smsApiKey");
const axios = require('axios');

export default class InfectionService {

	constructor(
		readonly userId: string,
		readonly infectionTime: Number = Date.now()) {}


	public static getNumberOfOverallInfectedPeople(): void {
		// TODO DB
	}

	public static sendUpdateForPossiblyInfected(): void {
		const contactsWithInfected: Array<IContact> = this.getContactsWithInfected();
		for (const contact of contactsWithInfected) {
			this.sendWarning(contact);
		}
	}

	private static getContactsWithInfected(): Array<IContact> {
		// fetch contacts from now - INTERVAL
		const possiblyInfectedUsers: Array<IContact> = [];

		return [];
	}

	private static sendWarning(contact: IContact) {
		const messageString = `Hallo du hast dich am ${contact.timestamp} 
			an dem Ort ${contact.contactPoint} aufgehalten, der von einem Corona Patienten aufgesucht wurde.
			Bitte lass dich testen.`
		axios.post('https://textbelt.com/text', {
			phone: contact.user.phone,
			message: messageString,
			key: smsApiConfig.key,
		}).then(response => {
			console.log(response.data);
			console.log("Kontakt wurde informiert")
		})
	}
}
