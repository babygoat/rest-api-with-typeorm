import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTable1547720531375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `
        CREATE TABLE IF NOT EXISTS users {
          id int(10) unsigned NOT NULL AUTO_INCREMENT,
          firstName varchar(255) NOT NULL,
          lastName varchar(255) NOT NULL,
          age int(3) NOT NULL,
          created_at timestamp DEFAULT CURRENT_TIMESTAMP,
          updated_at timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        } ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
        `
      );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      await queryRunner.query(
        `
        DROP TABLE IF EXISTS users;
        `
      );
    }

}
