import { Router } from 'express'

import CoursesController from '../controllers/coursesController'

const coursesRouter = Router()

const coursesController = new CoursesController()

coursesRouter.post('/', coursesController.create)
coursesRouter.get('/', coursesController.index)

export default coursesRouter