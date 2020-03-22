const idgen = require('idgen');
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
}

export interface IContactUser extends IContact {
    contactUser: IUser;
}

export interface IContactLocation extends IContact {
    contactLocation: ILocation;
}

export interface ILocation {
    id: String;
    name: String;
    curator: IUser;
}





export class User implements IUser {
    readonly id = idgen(16);
    constructor(
        readonly phone = 123,
        readonly firstName = "123",
        readonly lastName = "123",
        readonly infectionStatus = 1,
    ) {}
}

export class Contact implements IContact {
    readonly id = idgen(16);
    constructor(
        readonly timestamp = 123,
        readonly user = new User(),
    ) {}
}
export class ContactUser implements IContactUser {

    constructor(
        readonly id = idgen(16),
        readonly timestamp = 123,
        readonly user = new User(),
        readonly contactUser = new ContactUser(),
    ) {}
}


export class ContactLocation implements IContactLocation {
    constructor(
        readonly contactUser = new User(),
    ) {
        super();
    }
}


export class ContactPoint implements ILocation {
    readonly id = idgen(16);
    constructor(
        readonly name = "sdf",
        readonly curator = new User(),
    ) {}
}
