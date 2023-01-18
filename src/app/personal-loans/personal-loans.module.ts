import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLoansRoutingModule } from './personal-loans-routing.module';
import { PersonalLoansComponent } from '../personal-loans/personal-loans.component';
import {MatSliderModule} from '@angular/material/slider'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ApplyNowPersonalComponent } from './components/apply-now-personal/apply-now-personal.component';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonalLoansComponent,
    ApplyNowPersonalComponent
  ],
  imports: [
    CommonModule,
    PersonalLoansRoutingModule,
    MatSliderModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule
    
   
  ],
  exports:[
    PersonalLoansComponent

  ]
})
export class PersonalLoansModule { }
