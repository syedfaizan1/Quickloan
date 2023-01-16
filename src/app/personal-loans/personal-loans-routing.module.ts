import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalLoansComponent } from './personal-loans.component';
import { ApplyNowPersonalComponent } from './components/apply-now-personal/apply-now-personal.component';

const routes: Routes = [
  {path:'',component:PersonalLoansComponent},
  {path:'apply-now-personal',component:ApplyNowPersonalComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalLoansRoutingModule { }
