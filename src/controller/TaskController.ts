import { Request, Response } from "express";
import { ZodError } from "zod";
import { TaskBusiness } from "../business/TaskBusiness";
import { InputTaskSchema } from "../dtos/InputTask.dto";

export class TaskController {
    constructor (
        private taskBusiness: TaskBusiness
    ){}

    public createTask = async (req: Request, res: Response) => {
        try {
            const input = InputTaskSchema.parse(
                {
                    task: req.body.task,
                    status: req.body.status
                }
            )

            const output = await this.taskBusiness.createTask(input)

            res.status(201).send(output)
            
        } catch (error) {
            if(error instanceof ZodError){
                res.status(400).send(error.issues)
            } else {
                res.status(500).send("Erro inesperado\n " + error)
            }
        }
    }

    public getTasks = async (req: Request, res: Response) => {
        try {
        
            const output = await this.taskBusiness.getTasks()

            res.status(201).send(output)
            
        } catch (error) {
            if(error instanceof ZodError){
                res.status(400).send(error.issues)
            } else {
                res.status(500).send("Erro inesperado\n " + error)
            }
        }
    }
}