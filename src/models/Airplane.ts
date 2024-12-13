import { Max } from 'class-validator';
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}

export default Airplane;