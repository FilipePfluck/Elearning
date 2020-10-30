import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createCourses1604069683022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'courses',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'avatar',
                    type: 'varchar'
                },
                {
                    name: 'number_of_classes',
                    type: 'integer',
                    isNullable: true,
                    default: 0
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
