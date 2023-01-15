import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-personal-loans',
  templateUrl: './personal-loans.component.html',
  styleUrls: ['./personal-loans.component.scss']
})
export class PersonalLoansComponent implements OnInit {
valueM:number=24
valueR:number=10.99
valueLA:number= 100000
  constructor() { }

  ngOnInit(): void {
    this.EmiCalculator()
  }
  formatLabel(value: number) {
    if (value >= 1000 && value<100000) {
      return Math.round(value / 1000) + 'k';
    }
    if(value>=100000){
      return Math.round(value/100000)+'L';
    }
   


    return value;
    
  }
  onMonthChange(MonthValue: number){
    console.log(typeof(MonthValue));
    
    this.valueM=MonthValue
  }
  onRoiChange(Roi:number){
    console.log(typeof(Roi));

    this.valueR =Roi
    
  }
  onLoanAmountChange(loanAmount:number){
    console.log(typeof(loanAmount));

    this.valueLA =loanAmount

    
  }
Emi:number=0
  EmiCalculator(){
    // EMI = (P X R/12) X [(1+R/12) ^N] / [(1+R/12) ^N-1].
    // [P x R x (1+R)^N]/[(1+R)^N-1] 
    let Rate:number = Number(this.valueR)/this.valueM//12
    let rateV:number= 1+Rate

    let eqnP1:number = Number(this.valueLA)*Rate
    let eqnP2:number = Math.pow(rateV,Number(this.valueM))
    let eqnP3:number = Math.pow(rateV,(this.valueM-1))
    let eqnP:number =eqnP2/eqnP3

    this.Emi = (eqnP1 * eqnP)/this.valueM

  }
//   EmiCalculator(){

//    // [P x R x (1+R)^N]/[(1+R)^N-1] 

//    let Rate1:number = Number(1+this.valueR)
// let Rate2:number= Math.pow(Rate1,Number(this.valueM))
//   let pow1:number = Number(this.valueM-1)
//   let rate3:number = Math.pow(Rate1,pow1)

//   let p1 = this.valueLA * this.valueR * Rate2
//   this.Emi = p1/rate3
//   console.log(this.Emi);
  
//   }

  


}
