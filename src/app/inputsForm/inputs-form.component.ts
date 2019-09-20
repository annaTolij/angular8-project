import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DATA } from '../../data/data.constants';

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
  public info = DATA.info;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.inputsForm = this.formBuilder.group({
      inputsForm1: this.formBuilder.group({
        input1: [ this.info.num ],
        input2: [ this.info.date_issue ],
        input3: [ this.info.ntd ],
      }),
      inputsForm2: this.formBuilder.group({
        input4: [ this.info.object_name ],
      }),
      inputsForm3: this.formBuilder.group({
        input5: [ this.info.org_name ],
        input6: [ this.info.laboratory_name ],
      }),
    })
  }
}
