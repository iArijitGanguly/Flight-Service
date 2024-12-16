import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import Airport from './Airport';

@Entity({ name: 'cities' })
class City extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({ unique: true })
        name: string;
    
    @CreateDateColumn()
        createdAt: Date;
    
    @UpdateDateColumn()
        updatedAt: Date;

    @OneToMany(() => Airport, (airport) => airport.city, { cascade: true })
        airports: Airport[];
}

export default City;