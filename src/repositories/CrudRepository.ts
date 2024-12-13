import { DeepPartial, EntityTarget, ObjectLiteral } from 'typeorm';

import dataSource from '../data-source';
import NotFoundError from '../errors/NotFoundError';

class CrudRepository {
    private repository;

    constructor(entity: EntityTarget<ObjectLiteral>) {
        this.repository = dataSource.getRepository(entity);
    }

    async create(data: DeepPartial<ObjectLiteral>) {
        const entity = this.repository.create(data);
        return await this.repository.save(entity);
    }

    async getAll() {
        const response = await this.repository.find();
        return response;
    }

    async get(id: string) {
        const response = await this.repository.findOne({
            where: { id }
        });

        if(!response) {
            throw new NotFoundError('Id', id);
        }

        return response;
    }

    async update(id: string, data: DeepPartial<ObjectLiteral>) {
        await this.repository.update(id, data);
        const response = await this.repository.findOne({
            where: { id }
        });

        return response;
    }

    async Destroy(id: string) {
        const response = await this.repository.findOne({
            where: { id }
        });

        if(!response) {
            throw new NotFoundError('Primary Key', id);
        }

        await this.repository.delete(id);
        return response;
    }
}

export default CrudRepository;