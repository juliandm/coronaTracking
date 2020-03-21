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

    @ManyToMany(type => ContactPoint)
    contact_points: ContactPoint[]
}
