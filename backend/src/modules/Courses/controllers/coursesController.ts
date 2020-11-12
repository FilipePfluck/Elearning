import { Request, Response } from 'express'

import CreateCourse from '../services/createCourse'
import ListCourses from '../services/listCourses'

class CoursesController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { name, avatar, description } = request.body

        const createCourse = new CreateCourse()

        const course = await createCourse.execute({name, avatar, description})

        return response.json(course)
    }

    public async index(request: Request, response: Response): Promise<Response>{
        const { search } = request.query

        const listCourses = new ListCourses()

        const courses = await listCourses.execute({search} as {search: string})

        return response.json(courses)
    }
}

export default CoursesController