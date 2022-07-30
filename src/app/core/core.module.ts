import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SendEMailFormComponent } from './send-email-form/send-email-form.component';
import { NgModel } from '@angular/forms';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    NavBarComponent,
    SendEMailFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    SendEMailFormComponent
  ]
})
export class CoreModule { }
