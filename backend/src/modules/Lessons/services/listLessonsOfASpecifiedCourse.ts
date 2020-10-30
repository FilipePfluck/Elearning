import { getRepository } from 'typeorm'
import Lesson from '../entities/Lesson'

class Listlessons {
    public async execute(course_id: string){
        const lessonRepository = getRepository(Lesson)

        const lessons = await lessonRepository.find({
            where: {
                course_id: course_id
            }
        })

        return lessons
    }
}

export default Listlessons