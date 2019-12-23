import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATA } from '../../data/data.constants';

export class Inputs {
  inputsForm1: InputsForm1;
  inputsForm2: InputsForm1;
}

export class InputsForm1 {
  input_name: string | number;
  input_position: string | number;
  input_disabled: string | number;
}

@Component({
  selector: 'TextInputForm',
  templateUrl: './text-input-form.component.html',
  styleUrls: ['./text-input-form.component.scss']
})

export class TextInputFormComponent implements OnInit {

  public info = DATA.info;
  public inputsForm: FormGroup;

  public buildInputForm() {
    this.inputsForm = this.formBuilder.group({
      inputsForm1: this.formBuilder.group({
        input_name: [this.info.applicant_name],
        input_position: [this.info.applicant_position],
        input_disabled: [''],
      }),
      inputsForm2: this.formBuilder.group({
        input_name: [this.info.agreed],
        input_position: [this.info.agreed_position],
        input_disabled: [''],
      }),
    })
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildInputForm();
  }
}

