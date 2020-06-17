import { MigrationInterface, QueryRunner } from 'typeorm'

export class ChangeBookProperties1592419418305 implements MigrationInterface {
    name = 'ChangeBookProperties1592419418305'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE `book` ADD `providerName` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `providerId` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `isbn` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD UNIQUE INDEX `IDX_bd183604b9c828c0bdd92cafab` (`isbn`)', undefined)
      await queryRunner.query('ALTER TABLE `book` CHANGE `subtitle` `subtitle` varchar(255) NULL DEFAULT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `description`', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `description` varchar(5000) NULL DEFAULT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `imageLink`', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `imageLink` varchar(5000) NULL DEFAULT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` CHANGE `publishedDate` `publishedDate` datetime NULL DEFAULT NULL', undefined)
      await queryRunner.query('CREATE UNIQUE INDEX `IDX_2dc10dda219a8b1301f581e1d2` ON `book` (`providerId`, `providerName`, `isbn`)', undefined)
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP INDEX `IDX_2dc10dda219a8b1301f581e1d2` ON `book`', undefined)
      await queryRunner.query('ALTER TABLE `book` CHANGE `publishedDate` `publishedDate` datetime NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `imageLink`', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `imageLink` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `description`', undefined)
      await queryRunner.query('ALTER TABLE `book` ADD `description` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` CHANGE `subtitle` `subtitle` varchar(255) NOT NULL', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP INDEX `IDX_bd183604b9c828c0bdd92cafab`', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `isbn`', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `providerId`', undefined)
      await queryRunner.query('ALTER TABLE `book` DROP COLUMN `providerName`', undefined)
    }
}
