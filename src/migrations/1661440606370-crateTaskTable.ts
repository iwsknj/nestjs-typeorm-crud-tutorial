import { MigrationInterface, QueryRunner } from "typeorm";

export class crateTaskTable1661440606370 implements MigrationInterface {
    name = 'crateTaskTable1661440606370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(50) NOT NULL COMMENT 'タスク名', \`due_date\` date NOT NULL COMMENT '期限日', \`status\` tinyint(1) NOT NULL COMMENT 'ステータス' DEFAULT '1', \`created_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(0) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}
