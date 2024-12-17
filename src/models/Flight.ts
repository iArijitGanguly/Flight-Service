import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import Airplane from './Airplane';
import Airport from './Airport';

@Entity({ name: 'flights' })
class Flight extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column()
        flightNumber: string;

    @Column({ type: 'timestamp without time zone' })
        arrivalTime: Date;
    
    @Column({ type: 'timestamp without time zone' })
        departureTime: Date;
    
    @Column({ type: 'decimal', precision: 10, scale: 2})
        price: number;

    @Column({ nullable: true })
        boardingGate: string;

    @Column()
        totalSeats: number;

    @CreateDateColumn()
        createdAt: Date;
    
    @UpdateDateColumn()
        updatedAt: Date;

    @ManyToOne(() => Airplane, (airplane) => airplane.flights, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'airplaneId'})
        airplane: Airplane;

    @ManyToOne(() => Airport, (airport) => airport.departingFlights, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'departureAirportCode', referencedColumnName: 'code' })
        departureAirport: Airport;

    @ManyToOne(() => Airport, (airport) => airport.arrivingFlights, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'arrivalAirportCode', referencedColumnName: 'code' })
        arrivalAirport: Airport;
}

export default Flight;