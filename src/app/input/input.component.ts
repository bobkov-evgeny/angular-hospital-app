import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { Item } from 'src/assets/interfaces';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
})
export class InputComponent {
    constructor(private http: HttpClient) {}

    inceptionForm: FormGroup = new FormGroup({
        userName: new FormControl('', Validators.required),
        doctorName: new FormControl('', Validators.required),
        date: new FormControl('', Validators.required),
        complains: new FormControl('', Validators.required),
    });
    range = new FormGroup({
        start: new FormControl(),
        end: new FormControl(),
    });

    submit() {
        const { userName, doctorName, date, complains } =
            this.inceptionForm.value;
        const item = {
            userName,
            doctorName,
            date,
            complains,
        };
        console.log(item);
        this.http
            .post('http://localhost:5000/saveItem', item)
            .subscribe((response) => {
                console.log(response);
            });
    }
}
