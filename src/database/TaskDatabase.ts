import { TaskDB } from "../types/types";
import { BaseDatabase } from "./BaseDatabase";


export class TaskDatabase extends BaseDatabase {

    public static TABALE_TASKS = "tasks"

    public createTask = async (input: TaskDB): Promise<void> => {
        
        await TaskDatabase.connection(TaskDatabase.TABALE_TASKS).insert(input)
    }

    public getTasks = async (): Promise<TaskDB[]> => {

        const result: TaskDB[] = await TaskDatabase.connection(TaskDatabase.TABALE_TASKS)

        return result
    }
}