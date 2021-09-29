import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isLogged = false;
    headerTitle = this.isLogged ? 'Приемы' : 'Войти в систему';
}
