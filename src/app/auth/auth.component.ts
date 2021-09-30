import {Component, EventEmitter, Output} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {User} from "../../assets/interfaces";

export interface Token {
    token: String
}

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
})

export class AuthComponent {
    @Output() sendToken = new EventEmitter<string>();
    getToken(str:any) {
        this.sendToken.emit(str);
    }

    public registrationStatus: boolean = false;
    public windowTitle: string = 'Войти в систему';

    constructor(private http: HttpClient, private auth: AuthService, private router: Router) {
    }

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
        if(this.loginForm.valid) {
            const {email, password} = this.loginForm.value;
            const user: User = {
                email: email,
                password: password
            }

            this.auth.login(user).subscribe((response) => {
                this.loginForm.reset();
                this.getToken(response.token);
            })
        } else {
            alert('Введите валидные данные')
        }
    }



    handleRegister() {
        const form = this.registerForm.value;
        this.http.post<Token>('http://localhost:5000/register', form)
            .subscribe(response => {
                console.log(response)
                this.getToken(response.token);
            }, error => {
                console.log(error.error.message)
            })
    }

    toggleLoginToRegistration(): void {
        this.registrationStatus = !this.registrationStatus;
        this.windowTitle = this.registrationStatus
            ? 'Регистрация'
            : 'Войти в систему';
    }



}
