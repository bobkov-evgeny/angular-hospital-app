import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponse, isValidToken, User } from '../../assets/interfaces';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}

    get token(): string {
        return '';
    }

    login(user: User): Observable<any> {
        return this.http
            .post<AuthResponse>('http://localhost:5000/login', user)
            .pipe(
                tap(
                    (response) => {
                        const token = response.token;
                        this.http
                            .post<isValidToken>(
                                'http://localhost:5000/checkToken',
                                {
                                    authToken: response.token,
                                    userId: response.userId,
                                }
                            )
                            .subscribe((response) => {
                                if (response.valid)
                                    localStorage.setItem('authToken', token);
                                else alert('Токен не валидный, вы хакер?');
                            });
                    },
                    (error) => {
                        alert(`
            ${error.error.message}`);
                    }
                )
            );
    }

    logout() {
        localStorage.clear();
    }
}
