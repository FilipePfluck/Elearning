import { getRepository } from 'typeorm'
import Course from '../entities/Course'

class ListCourses {
    public async execute(){
        const courseRepository = getRepository(Course)

        const courses = courseRepository.find()

        return courses
    }
}

export default ListCourses