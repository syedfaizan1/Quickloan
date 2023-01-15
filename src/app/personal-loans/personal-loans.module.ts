import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLoansRoutingModule } from './personal-loans-routing.module';
import { PersonalLoansComponent } from '../personal-loans/personal-loans.component';


@NgModule({
  declarations: [
    PersonalLoansComponent
  ],
  imports: [
    CommonModule,
    PersonalLoansRoutingModule
  ],
  exports:[
    PersonalLoansComponent

  ]
})
export class PersonalLoansModule { }
