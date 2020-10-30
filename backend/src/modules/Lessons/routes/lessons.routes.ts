import { Router } from 'express'

import LessonsController from '../controllers/lessonsController'

const lessonsRouter = Router()

const lessonsController = new LessonsController()

lessonsRouter.post('/', lessonsController.create)
lessonsRouter.get('/:course_id', lessonsController.index)
lessonsRouter.get('/lesson/:lesson_id', lessonsController.show)

export default lessonsRouter