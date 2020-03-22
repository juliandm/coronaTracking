import {ILocation, ContactPoint, IUser, User, IContact, Contact} from "./index";

const users: Array<IUser> = [];
const user1 = new User(4915759479219, "Julian", "de Mourgues",0);
const user2 = new User(491786511541, "Merve", "Emir",0)
const user3 = new User(491745497988, "Sebastian", "Knott",0);
users.push(user1,user2, user3);


const contactPoints: Array<ILocation> = [];

contactPoints.push(new ContactPoint("Rewe",user1));
contactPoints.push(new ContactPoint("Arzt",user1));
contactPoints.push(new ContactPoint("Bushalte",user1));

const contacts: Array<IContact> = [];

contacts.push(new Contact(Date.now(),user1));
contacts.push(new Contact(Date.now(),user1));
contacts.push(new Contact(Date.now(),user1));
