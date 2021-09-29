import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
    inceptionForm: FormGroup = new FormGroup({
        "userName": new FormControl('', Validators.required),
        "doctorName": new FormControl('', Validators.required),
        "date": new FormControl('', Validators.required),
        "complains": new FormControl('', Validators.required)
    })
    range = new FormGroup({
        start: new FormControl(),
        end: new FormControl()
    });

    submit() {
        console.log(this.inceptionForm)
    }

}
