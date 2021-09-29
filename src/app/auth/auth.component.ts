import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
    public registrationStatus: boolean = false;
    public windowTitle: string = 'Войти в систему';

    constructor() {}

    toggleLoginToRegistration (): void {
        this.registrationStatus = !this.registrationStatus;
        this.windowTitle = this.registrationStatus ? 'Регистрация' : "Войти в систему";
    }

    ngOnInit(): void {
    }

}
