import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAirplaneTable1734126374598 implements MigrationInterface {
    name = 'CreateAirplaneTable1734126374598';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "airplanes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "modelNumber" character varying NOT NULL, "capacity" integer NOT NULL DEFAULT \'0\', "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_0c49595d788fa1c9009d7dbd290" PRIMARY KEY ("id"))');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "airplanes"');
    }

}
