import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1609606906175 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'name',
                    type: 'varchar',
                  },
                  {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                  },
                  {
                    name: 'password',
                    type: 'varchar',
                  },
                  {
                    name: 'type',
                    type: 'varchar',
                    default: "'user'",
                  },
                  {
                    name: 'createdAt',
                    type: 'timestamp',
                  }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }
}
