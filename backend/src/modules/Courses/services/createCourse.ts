import { getRepository } from 'typeorm'
import Course from '../entities/Course'

interface IRequest {
    name: string,
    avatar: string,
    description: string
}

class CreateCourse {
    public async execute({name, avatar, description}:IRequest){
        const courseRepository = getRepository(Course)

        const course = courseRepository.create({
            name,
            avatar
        })

        await courseRepository.save(course)

        return course
    }
}

export default CreateCourse