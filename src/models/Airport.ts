import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import City from './City';
import Flight from './Flight';

@Entity({ name: 'airports' })
class Airport extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({ unique: true })
        name: string;

    @Column({ unique: true })
        code: string;

    @Column({ unique: true, nullable: true })
        address: string;

    @ManyToOne(() => City, (city) => city.airports, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'cityId' })
        city: City;

    @CreateDateColumn()
        createdAt: Date;

    @UpdateDateColumn()
        updatedAt: Date;

    @OneToMany(() => Flight, (flight) => flight.departureAirport, { cascade: true })
        departingFlights: Flight[];

    @OneToMany(() => Flight, (flight) => flight.arrivalAirport, { cascade: true })
        arrivingFlights: Flight[];
}

export default Airport;