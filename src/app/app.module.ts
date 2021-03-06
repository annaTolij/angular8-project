import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { IgxInputGroupModule, IgxCardModule, IgxGridModule, IgxTreeGridModule } from 'igniteui-angular';
import { InputsFormComponent } from './inputsForm/inputs-form.component';
import { TextInputFormComponent } from './textInpupsForm/text-input-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputsFormComponent,
    TableComponent,
    TextInputFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    IgxCardModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxTreeGridModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
