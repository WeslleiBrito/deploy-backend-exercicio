import z from 'zod'

export interface InputTaskDTO {
    task: string,
    status?: number
}


export interface OutputTaskDTO {
    message: string
}

export const InputTaskSchema = z.object(
    {
        task: z.string({required_error: "O nome da tarefa deve ser informado.", invalid_type_error: "Espera-se que a tarefa seja do tipo string"})
        .min(5, 'A tarefa não pode ter menos de 5 caracateres.'),
        status: z.number({invalid_type_error: 'O status deve ser um número entre 0 e 2.'})
        .min(0, {message: "Não é permitodo valor menor que zero."})
        .max(2, {message: "Não é permitodo valor maior que dois."})
        .optional()
    }
).transform(data => data as InputTaskDTO)