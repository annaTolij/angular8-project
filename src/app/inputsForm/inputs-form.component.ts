import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class inputs {
  inputsForm1: inputsForm1;
  inputsForm2: inputsForm2;
  inputsForm3: inputsForm3;
}

export class inputsForm1 {
  input1: string | number;
  input2: string | number;
  input3: string | number;
}
export class inputsForm2 {
  input4: string | number;
}
export class inputsForm3 {
  input5: string | number;
  input6: string | number;
}

@Component({
  selector: 'app-inputs-form',
  templateUrl: './inputs-form.component.html',
  styleUrls: ['./inputs-form.component.scss']
})

export class InputsFormComponent implements OnInit {
  public inputsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inputsForm = this.formBuilder.group({
      inputsForm1: this.formBuilder.group({
        input1: [ '' ],
        input2: [ '' ],
        input3: [ '' ],
      }),
      inputsForm2: this.formBuilder.group({
        input4: [ '' ],
      }),
      inputsForm3: this.formBuilder.group({
        input5: [ '' ],
        input6: [ '' ],
      }),
    })
  }
}
