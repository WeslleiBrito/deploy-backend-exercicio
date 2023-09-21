import express from "express"
import { TaskController } from "../controller/TaskController"
import { TaskBusiness } from "../business/TaskBusiness"
import { TaskDatabase } from "../database/TaskDatabase"
import { IdGenerator } from "../services/IdGenerator"

export const taskRouter = express.Router()


const taskController = new TaskController(
    new TaskBusiness(
        new TaskDatabase(),
        new IdGenerator()
    )
)

taskRouter.post('/', taskController.createTask)
taskRouter.get('/', taskController.getTasks)