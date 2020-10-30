import { Request, Response } from 'express'

import CreateLesson from '../services/createLesson'
import ListLessons from '../services/listLessonsOfASpecifiedCourse'
import ListSpecificLesson from '../services/listSpecificLesson'

class LessonsController {
    public async create(request: Request, response: Response): Promise<Response>{
        const { name, description, course_id, duration, video_id } = request.body

        const createLesson = new CreateLesson()

        const lesson = await createLesson.execute({
            name,
            description,
            course_id,
            duration,
            video_id
        })

        console.log(lesson)

        return response.json(lesson)
    }

    public async index(request: Request, response: Response): Promise<Response>{
        const {course_id} = request.params

        const listLessons = new ListLessons

        const lessons = await listLessons.execute(String(course_id))

        return response.json(lessons)
    }

    public async show (request: Request, response: Response): Promise<Response>{
        const {lesson_id} = request.params

        console.log(lesson_id)

        const listSpecificLesson = new ListSpecificLesson()

        const lesson = await listSpecificLesson.execute(lesson_id)

        return response.json(lesson)
    }
}

export default LessonsController