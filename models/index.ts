import ContactPointService from "../services/ContactPointService";

export interface IUser {
    id: String;
    firstName?: String;
    lastName?: String;
    phone: Number;
    infectionStatus: Number;
}

// Central Table
export interface IContact {
    id: String;
    timestamp: Number;
    user: IUser;
    contactPoint: IContactPoint;
    directUser?: IUser; // If scan was on the phone of another user
}

export interface IContactPoint {
    id: String;
    curator: IUser;
}





export class User implements IUser {
    constructor(
        readonly id = "sdf",
        readonly phone = 123,
        readonly infectionStatus = 1,
    ) {}
}
export class Contact implements IContact {
    constructor(
        readonly id = "sdf",
        readonly timestamp = 123,
        readonly user = new User(),
        readonly contactPoint = new ContactPoint(),
    ) {}
}

export class ContactPoint implements IContactPoint {
    constructor(
        readonly id = "sdf",
        readonly curator = new User(),
    ) {}
}
