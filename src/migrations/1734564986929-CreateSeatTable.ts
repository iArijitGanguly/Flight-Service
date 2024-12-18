import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateSeatTable1734564986929 implements MigrationInterface {
    name = 'CreateSeatTable1734564986929';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TYPE "public"."seats_type_enum" AS ENUM(\'business\', \'economy\', \'premium-economy\', \'first-class\')');
        await queryRunner.query('CREATE TABLE "seats" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "row" integer NOT NULL, "col" character varying NOT NULL, "type" "public"."seats_type_enum" NOT NULL DEFAULT \'economy\', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "airplane_id" uuid, CONSTRAINT "PK_3fbc74bb4638600c506dcb777a7" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "seats" ADD CONSTRAINT "FK_998ad72daae8bfce5c033dbd698" FOREIGN KEY ("airplane_id") REFERENCES "airplanes"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "seats" DROP CONSTRAINT "FK_998ad72daae8bfce5c033dbd698"');
        await queryRunner.query('DROP TABLE "seats"');
        await queryRunner.query('DROP TYPE "public"."seats_type_enum"');
    }

}
