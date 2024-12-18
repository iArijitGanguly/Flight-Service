import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { SEAT_TYPE } from '../utils/common/Enums';
import Airplane from './Airplane';

@Entity({ name: 'seats' })
class Seat extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column()
        row: number;

    @Column()
        col: string;

    @Column({ type: 'enum', enum: SEAT_TYPE, default: SEAT_TYPE.ECONOMY }) 
        type: SEAT_TYPE;

    @CreateDateColumn({ name: 'created_at' })
        createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' }) 
        updatedAt: Date;

    @ManyToOne(() => Airplane, (airplane) => airplane.seats, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'airplane_id', referencedColumnName: 'id' })
        airplaneDetails: Airplane;
}

export default Seat;