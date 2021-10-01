export interface User {
    email: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    userId: string;
}

export interface isValidToken {
    valid: boolean;
}

export interface Item {
    name: string;
    doctor: string;
    date: string;
    complains: string;
}
