import {IContact} from "../models";

export default class InfectionChain {

	constructor(readonly userId: string) {
	}

	private getContactsWithInfected(): Array<IContact> {
		return [];
	}

	private isStillDangerous(): Boolean {
		return true;
	}

	private iterate
}
