import {IContact, IContactPoint, IUser} from "../models";
const smsApiConfig = require("../config/keys/smsApiKey");
const {DAYS_CONTAGIOUS_SINCE_INFECTION, MINUTES_SPENT_AT_CONTACT_POINT} = require("../constants");
const axios = require('axios');

export default class InfectionService {

	public static sendUpdateForPossiblyInfected(user: IUser): void {
		console.log("Finding possibly infected");
		const possiblyContagiousContacts: Array<IContact> = this.getPossiblyContagiousContacts(user);
		for (const contact of possiblyContagiousContacts) {
			this.sendWarning(contact);
		}
	}

	private static getPossiblyContagiousContacts(user: IUser): Array<IContact> {
		const infectionTimestamp: Number = Date.now()
		const possiblyContagiousContacts: Array<IContact> = [];
		// TODO First Call to DB
		// Get all contacts where user.id = user.id
		// And where timestamp >  infectionTimestamp - DAYS_CONTAGIOUS_SINCE_INFECTION
		const contactsOfInfected: Array<IContact> = [];

		for(const contact of contactsOfInfected) {
			// TODO Second Call to DB, can be optimized later so in total only two calls in this function
			// Get all contacts that match contact.contactPoint
			// and are in Math.abs(MINUTES_SPENT_AT_CONTACT_POINT +- contact.timestamp)
			const indirectContactsWithInfectedAtContactPoint: Array<IContact> = [];
			possiblyContagiousContacts
				.concat(indirectContactsWithInfectedAtContactPoint);
		}
		return possiblyContagiousContacts;
	}

	private static sendWarning(contact: IContact) {
		const messageString = `Hallo du hast dich am ${contact.timestamp} 
			an dem Ort ${contact.contactPoint.name} aufgehalten, der von einem Corona Patienten aufgesucht wurde.
			Bitte lass dich testen.`;
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
