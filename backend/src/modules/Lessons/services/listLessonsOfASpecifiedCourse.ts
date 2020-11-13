import { getRepository } from 'typeorm'
import { format } from 'date-fns'

import Lesson from '../entities/Lesson'

class Listlessons {
    public async execute(course_id: string){
        const lessonRepository = getRepository(Lesson)

        const lessons = await lessonRepository.find({
            where: {
                course_id: course_id
            }
        })

        const formattedLessons = lessons.map(lesson => {
            const minutes = Math.floor(lesson.duration/60) 
            const seconds = lesson.duration - minutes * 60

            return {...lesson, duration: format(new Date(0, 0, 0, 0, minutes, seconds), `mm 'min', ss 's'`)}
        })

        return formattedLessons
    }
}

export default Listlessons