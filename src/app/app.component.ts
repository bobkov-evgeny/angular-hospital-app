import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "./auth/auth.service";



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {

    token:string = '';
    isLogged = !!localStorage.getItem('authToken');
    headerTitle:string = this.isLogged ? 'Приемы' : 'Войти в систему';


    constructor(private http: HttpClient, private auth: AuthService) {
    }

    ngDoCheck() {
        this.isLogged = !!localStorage.getItem('authToken');
        this.headerTitle = this.isLogged ? 'Приемы' : 'Войти в систему';
    }

    handleLogout() {
        this.auth.logout();
    }

    getToken(str:any){
        this.token = str;
    }
}
