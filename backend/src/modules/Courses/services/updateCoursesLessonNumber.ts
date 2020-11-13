import { getRepository } from 'typeorm'
import Course from '../entities/Course'

interface IRequest {
    id: string
}

class CreateCourse {
    public async execute({id}:IRequest){
        const courseRepository = getRepository(Course)

        const course = await courseRepository.findOne(id)
        
        if(course){
            course.number_of_classes++
            await courseRepository.save(course)
        }

        return course
    }
}

export default CreateCourse