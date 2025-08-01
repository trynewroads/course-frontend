import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginForm } from '@tnr/features/auth/dto/login.dto'

export const createLoginForm = () => {
    return new FormGroup<LoginForm>({
        username: new FormControl('', {validators: [Validators.required], nonNullable: true}),
        password: new FormControl('', {validators: [Validators.required], nonNullable: true})
    })
}