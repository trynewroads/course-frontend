import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CreateTaskForm } from '@tnr/features/tasks/dto/create-task.dto'
import { UpdateTaskStatusForm } from '@tnr/features/tasks/dto/update-task-status.dto'
import { UpdateTaskDto, UpdateTaskForm } from '@tnr/features/tasks/dto/update-task.dto'
import { Task } from '@tnr/features/tasks/models/task.model'


export const createTaskForm = () => {
    return new FormGroup<CreateTaskForm>({
        title: new FormControl('', {validators: [Validators.required], nonNullable: true}),
        description: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    })
}

export const updateTaskForm = (task: UpdateTaskDto) => {
    return new FormGroup<UpdateTaskForm>({
        title: new FormControl(task.title, {validators: [Validators.required], nonNullable: true}),
        description: new FormControl(task.description, {validators: [Validators.required], nonNullable: true}),
    })
}


export const updateTaskStatusForm = (task: Task) => {
    return new FormGroup<UpdateTaskStatusForm>({
        status: new FormControl(task.status, {validators: [Validators.required], nonNullable: true}),
    })
}

