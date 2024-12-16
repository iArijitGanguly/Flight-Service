import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateFlightTable1734337579111 implements MigrationInterface {
    name = 'CreateFlightTable1734337579111';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE TABLE "flights" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "arrivalTime" TIMESTAMP NOT NULL, "departureTime" TIMESTAMP NOT NULL, "price" numeric(10,2) NOT NULL, "boardingGate" character varying, "totalSeats" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "airplaneId" uuid, "departureAirportId" character varying, "arrivalAirportId" character varying, CONSTRAINT "PK_c614ef3382fdd70b6d6c2c8d8dd" PRIMARY KEY ("id"))');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_07092119df144abae64396ec651" FOREIGN KEY ("airplaneId") REFERENCES "airplanes"("id") ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_d8599ea6a36a4910c4761a14c15" FOREIGN KEY ("departureAirportId") REFERENCES "airports"("code") ON DELETE CASCADE ON UPDATE NO ACTION');
        await queryRunner.query('ALTER TABLE "flights" ADD CONSTRAINT "FK_aef4f238689892540f5f2d86cc8" FOREIGN KEY ("arrivalAirportId") REFERENCES "airports"("code") ON DELETE CASCADE ON UPDATE NO ACTION');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_aef4f238689892540f5f2d86cc8"');
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_d8599ea6a36a4910c4761a14c15"');
        await queryRunner.query('ALTER TABLE "flights" DROP CONSTRAINT "FK_07092119df144abae64396ec651"');
        await queryRunner.query('DROP TABLE "flights"');
    }

}
