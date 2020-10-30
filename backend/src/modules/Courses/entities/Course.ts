import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from 'typeorm'

@Entity('courses')
class Course {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @Column()
    avatar: string

    @Column()
    number_of_classes: number
}

export default Course