import { MigrationInterface, QueryRunner } from "typeorm";

export class AddProgressToUserBooks1592785439312 implements MigrationInterface {
    name = 'AddProgressToUserBooks1592785439312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_book` ADD `progress` tinyint(200) NOT NULL DEFAULT 0", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user_book` DROP COLUMN `progress`", undefined);
    }

}
