import { getRepository } from 'typeorm'
import Lesson from '../entities/Lesson'

class Listlessons {
    public async execute(lesson_id: string){
        const lessonRepository = getRepository(Lesson)

        const lesson = await lessonRepository.findOne(lesson_id)

        return lesson
    }
}

export default Listlessons