import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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
}

export default City;