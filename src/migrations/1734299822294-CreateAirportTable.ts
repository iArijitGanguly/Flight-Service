import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAirportTable1734299822294 implements MigrationInterface {
    name = 'CreateAirportTable1734299822294';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "airports" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "code" character varying NOT NULL, "address" character varying, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "cityId" uuid, CONSTRAINT "UQ_6330ee8b2bddb4987bb85824f8c" UNIQUE ("name"), CONSTRAINT "UQ_06be6c7681ff18455fd7fd7c45d" UNIQUE ("code"), CONSTRAINT "UQ_8a00eba536d842f6eca6b933037" UNIQUE ("address"), CONSTRAINT "PK_507127316cedb7ec7447d0cb3d7" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "airports" ADD CONSTRAINT "FK_5920c262959ef8d8bb9c41755c7" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "airports" DROP CONSTRAINT "FK_5920c262959ef8d8bb9c41755c7"');
        await queryRunner.query('DROP TABLE "airports"');
    }

}
