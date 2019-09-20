import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATA } from '../../data/data.constants';


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
  
  public info = DATA.info;
  public inputsForm: FormGroup;
  private inputs: inputs;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inputsForm = this.formBuilder.group({
      inputsForm1: this.formBuilder.group({
        input1: [ this.info.applicant_name ],
        input2: [ this.info.applicant_position ],
        input3: [ '' ],
      }),
      inputsForm2: this.formBuilder.group({
        input1: [ this.info.agreed ],
        input2: [ this.info.agreed_position ],
        input3: [ '' ],
      }),
    })
  }
}

