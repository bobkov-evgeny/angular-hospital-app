import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
    public registrationStatus: boolean = false;
    public windowTitle: string = 'Войти в систему';

    loginForm: FormGroup = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    registerForm: FormGroup = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        repeatPassword: new FormControl('', Validators.required),
    });

    handleLogin() {
        console.log(this.loginForm.value);
        this.loginForm.reset();
    }

    async handleRegister() {
        try {
            const form = this.registerForm.value;
            const data = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                mode: 'no-cors',
                body: {
                    email: form.email,
                    password: form.password,
                },
            });
            console.log(await data.json());
        } catch (err) {}
    }

    toggleLoginToRegistration(): void {
        this.registrationStatus = !this.registrationStatus;
        this.windowTitle = this.registrationStatus
            ? 'Регистрация'
            : 'Войти в систему';
    }
}
