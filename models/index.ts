export interface IUser {
    id: String;
    firstName: String;
    lastName: String;
    verified: Boolean;
    infectionStatus: Number;
    phone: Number;
}

// Central Table
export interface IContact {
    id: String;
    timestamp: Number;
    user: IUser;
    contactPoint: IContactPoint;
    directUser: IUser; // If scan was on the phone of another user
}

export interface IContactPoint {
    id: String;
    long: String;
    lat: String;
    curator: IUser;
}
