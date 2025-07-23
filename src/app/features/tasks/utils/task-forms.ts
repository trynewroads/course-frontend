import { FormControl, FormGroup, Validators } from '@angular/forms'
import { CreateTaskForm } from '../dto/create-task.dto'
import { UpdateTaskDto } from '../dto/update-task.dto'

export const createTaskForm = () => {
    return new FormGroup<CreateTaskForm>({
        title: new FormControl('', {validators: [Validators.required], nonNullable: true}),
        description: new FormControl('', {validators: [Validators.required], nonNullable: true}),
    })
}

export const updateTaskForm = (task: UpdateTaskDto) => {
    return new FormGroup<CreateTaskForm>({
        title: new FormControl(task.title, {validators: [Validators.required], nonNullable: true}),
        description: new FormControl(task.description, {validators: [Validators.required], nonNullable: true}),
    })
}