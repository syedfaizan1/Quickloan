import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalLoansComponent } from './personal-loans.component';

const routes: Routes = [
  {path:'',component:PersonalLoansComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalLoansRoutingModule { }
