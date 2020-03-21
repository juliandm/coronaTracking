import {IContact, IContactPoint, IUser} from "../models";
const smsApiConfig = require("../config/keys/smsApiKey");
const {DAYS_CONTAGIOUS_SINCE_INFECTION, MINUTES_SPENT_AT_CONTACT_POINT} = require("../constants");
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

	private static getPossiblyInfected(): Array<IUser> {
		const possiblyInfectedUsers: Array<IUser> = [];
		// First Call to DB
		const contactsOfInfected: Array<IContact> = [];

		// Find direct Users and reduce contactsOfInfected
		let i = contactsOfInfected.length;
		while(i--) {
			// @ts-ignore
			if (Math.abs(contact.timestamp - this.infectionTime) < DAYS_CONTAGIOUS_SINCE_INFECTION) {
				const contact = contactsOfInfected[i];
				// Add direct Contact
				if (contact.directUser) {
					possiblyInfectedUsers.push(contact.directUser);
				}
			}
			// Remove if not in relevant interval
			contactsOfInfected.pop();
		}

		// Second Call to DB
		// Get all contacts that match any of contactPoint in contactsOfInfected
		// and are in Math.abs(MINUTES_SPENT_AT_CONTACT_POINT -
		const contactsOfTimeAndContactPoint: Array<IContact> = [];

		return possiblyInfectedUsers;
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
