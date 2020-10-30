import Router from 'express'

import coursesRouter from '@modules/Courses/routes/courses.routes'
import lessonsRouter from '@modules/Lessons/routes/lessons.routes'

const routes = Router()

routes.use('/courses', coursesRouter)
routes.use('/lessons', lessonsRouter)

export default routes