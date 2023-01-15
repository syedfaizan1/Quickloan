import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLoansRoutingModule } from './personal-loans-routing.module';
import { PersonalLoansComponent } from '../personal-loans/personal-loans.component';
import {MatSliderModule} from '@angular/material/slider'
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    PersonalLoansComponent
  ],
  imports: [
    CommonModule,
    PersonalLoansRoutingModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule
  ],
  exports:[
    PersonalLoansComponent

  ]
})
export class PersonalLoansModule { }
