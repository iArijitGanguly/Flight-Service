import Fastify from 'fastify';

import db from './configs/dbConfig';
import logger from './configs/loggerConfig';
import serverConfig from './configs/serverConfig';

const { PORT } = serverConfig;

const fastify = Fastify();

fastify.listen({ port: PORT }, async (err) => {
    if(err) {
        fastify.log.error(err);
        process.exit(1);
    }
    await db.connect();
    logger.info(`Server started at PORT: ${PORT}`);
});