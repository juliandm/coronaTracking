import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany} from 'typeorm';
import {User} from "./user";
import {ContactPoint} from "./contact_point";


@Entity()
export class Contact {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("timestamp")
    timestamp: Date;

    @ManyToMany(type => User)
    users: User[];

    @ManyToOne(type => ContactPoint, ContactPoint => ContactPoint.contacts)
    contact_point: ContactPoint
}
