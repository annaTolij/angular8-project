import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATA } from '../../data/data.constants';

export class Inputs {
  inputsForm1: InputsForm1;
  inputsForm2: InputsForm2;
  inputsForm3: InputsForm3;
}

export class InputsForm1 {
  input_mum: string | number;
  input_date_issue: string | number;
  input_ntd: string | number;
}
export class InputsForm2 {
  input_object_name: string | number;
}
export class InputsForm3 {
  input_org_name: string | number;
  input_laboratory_name: string | number;
}

@Component({
  selector: 'app-inputs-form',
  templateUrl: './inputs-form.component.html',
  styleUrls: ['./inputs-form.component.scss']
})

export class InputsFormComponent implements OnInit {
  public inputsForm: FormGroup;
  public info = DATA.info;
  public buildInputsForm() {
    this.inputsForm = this.formBuilder.group({
      input_num: [this.info.num],
      input_date_issue: [this.info.date_issue],
      input_ntd: [this.info.ntd],
      input_object_name: [this.info.object_name],
      input_org_name: [this.info.org_name],
      input_laboratory_name: [this.info.laboratory_name],
    })
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildInputsForm();
  }
}
