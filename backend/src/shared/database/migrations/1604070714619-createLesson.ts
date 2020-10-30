import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class createLesson1604070714619 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'lessons',
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
                    type: 'varchar'
                },
                {
                    name: 'description',
                    type: 'varchar'
                },
                {
                    name: 'duration',
                    type: 'numeric'
                },
                {
                    name: 'video_id',
                    type: 'varchar'
                },
                {
                    name: 'course_id',
                    type: 'uuid'
                }
            ]
        }))

        await queryRunner.createForeignKey('lessons', new TableForeignKey({
            name: 'lessonCourse',
            columnNames: ['course_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'courses',
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('lessons', 'lessonCourse')
        await queryRunner.dropTable('lessons')
    }

}
