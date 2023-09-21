import { TaskDatabase } from "../database/TaskDatabase";
import { InputTaskDTO, OutputTaskDTO } from "../dtos/InputTask.dto";
import { IdGenerator } from "../services/IdGenerator";
import { TaskDB } from "../types/types";

const nameStatus = ["Em aberto", "Em execução", "Finalizado"]
export class TaskBusiness {

    constructor (
        private taskDatabase: TaskDatabase,
        private idGenerator: IdGenerator
    ){}

    public createTask = async (input: InputTaskDTO): Promise<OutputTaskDTO> => {
        const {task, status} = input
        const numberStatus = status ? status : 0
        const id = this.idGenerator.generate()

        await this.taskDatabase.createTask({id, task, status: numberStatus})

        return {
            message: "Tarefa criada com sucesso"
        }
    }

    public getTasks = async (): Promise<TaskDB[]> => {

        return await this.taskDatabase.getTasks()
        
    } 
}