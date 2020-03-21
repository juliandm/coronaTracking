import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from "typeorm";
import {User} from "./user";
import {Contact} from "./contact";

@Entity()
export class ContactPoint {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    long: number;

    @Column()
    lat: number;

    @Column({
        length: 100
    })
    name: string;

    @ManyToOne(type => User, user => user.contact_points)
    curator: User;

    @OneToMany(type => Contact, Contacts => Contacts.contact_point)
    contacts: Contact[];

}
