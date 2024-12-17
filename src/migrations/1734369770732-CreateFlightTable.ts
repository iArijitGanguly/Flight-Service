import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFlightTable1734369770732 implements MigrationInterface {
    name = 'CreateFlightTable1734369770732';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "flights" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "flightNumber" character varying NOT NULL, "arrivalTime" TIMESTAMP NOT NULL, "departureTime" TIMESTAMP NOT NULL, "price" numeric(10,2) NOT NULL, "boardingGate" character varying, "totalSeats" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "airplaneId" uuid, "departureAirportCode" character varying, "arrivalAirportCode" character varying, CONSTRAINT "PK_c614ef3382fdd70b6d6c2c8d8dd" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_07092119df144abae64396ec651" FOREIGN KEY ("airplaneId") REFERENCES "airplanes"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_dd8009a911110ee5f394afeccfd" FOREIGN KEY ("departureAirportCode") REFERENCES "airports"("code") ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_d33d2ee6b16e86bf1b053de7e7d" FOREIGN KEY ("arrivalAirportCode") REFERENCES "airports"("code") ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_d33d2ee6b16e86bf1b053de7e7d"');
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_dd8009a911110ee5f394afeccfd"');
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_07092119df144abae64396ec651"');
        await queryRunner.query('DROP TABLE "flights"');
    }

}
