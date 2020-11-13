import { getRepository } from 'typeorm'
import Lesson from '../entities/Lesson'

import UpdateCourseLessonsNumber from '@modules/Courses/services/updateCoursesLessonNumber'

interface IRequest {
    course_id: string,
    description: string,
    duration: number,
    name: string,
    video_id: string
}

class CreateLesson {
    public async execute({
        course_id,
        description,
        duration,
        name,
        video_id
    }:IRequest){
        const lessonRepository = getRepository(Lesson)
        const updateCoursesLessonNumber = new UpdateCourseLessonsNumber()

        const lesson = lessonRepository.create({
            course_id,
            description,
            duration,
            name,
            video_id
        })

        await lessonRepository.save(lesson)

        await updateCoursesLessonNumber.execute({id: course_id})

        return lesson
    }
}

export default CreateLesson