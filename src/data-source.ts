import 'reflect-metadata';

import { DataSource } from 'typeorm';

import serverConfig from './configs/serverConfig';

const { DB_HOST, DB_NAME, DB_PORT, DB_USERNAME, DB_PASSWORD } = serverConfig;

const dataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    entities: [],
    migrations: ['dist/migrations/**/*.js'],
    synchronize: false,
    logging: true
});

export default dataSource;