import { Max } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import Flight from './Flight';
import Seat from './Seat';

@Entity({ name: 'airplanes' })
class Airplane extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({ type: 'varchar' })
        modelNumber: string;

    @Column({ default: 0 })
    @Max(1000)
        capacity: number;
    
    @CreateDateColumn()
        createdAt: Date;
    
    @UpdateDateColumn()
        updatedAt: Date;

    @OneToMany(() => Flight, (flight) => flight.airplaneDetails, { cascade: true })
        flights: Flight[];

    @OneToMany(() => Seat, (seat) => seat.airplaneDetails, { cascade: true })
        seats: Seat[];
}

export default Airplane;