import { getRepository } from 'typeorm'
import Lesson from '../entities/Lesson'

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

        const lesson = lessonRepository.create({
            course_id,
            description,
            duration,
            name,
            video_id
        })

        await lessonRepository.save(lesson)

        return lesson
    }
}

export default CreateLesson