import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from "typeorm";
import {ContactPoint} from "./contact_point";
import {Contact} from "./contact";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100
    })
    first_name: string;

    @Column({
        length: 100
    })
    last_name: string;

    @Column({
        length: 20
    })
    phone: string;

    @Column()
    verified: boolean;

    @Column()
    infection_state: number;

    @OneToMany(type => ContactPoint, ContactPoint => ContactPoint.curator)
    contact_points: ContactPoint[];

    @ManyToMany(type => Contact)
    @JoinTable()
    contacts: Contact[]

}
