import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

export class inputs {
  inputsForm1: inputsForm1;
  inputsForm2: inputsForm1;
}

export class inputsForm1 {
  input1: string | number;
  input2: string | number;
  input3: string | number;
}

@Component({
  selector: 'TextInputForm',
  templateUrl: './text-input-form.component.html',
  styleUrls: ['./text-input-form.component.scss']
})

export class TextInputFormComponent implements OnInit {

  public inputsForm: FormGroup;

  private inputs: inputs;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inputsForm = this.formBuilder.group({
      inputsForm1: this.formBuilder.group({
        input1: [ '' ],
        input2: [ '' ],
        input3: [ '' ],
      }),
      inputsForm2: this.formBuilder.group({
        input1: [ '' ],
        input2: [ '' ],
        input3: [ '' ],
      }),
    })
  }
}

