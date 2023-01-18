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
// cardtext
longText = `Looking for an instant way to fund your larger expenses? Get an instant personal loan!

But what is a personal loan? It is an attractive loan option that you can consider for various purposes without pledging any collateral. Whether you want to finance a medical emergency, take a much-needed family vacation, or give your home a long-awaited makeover, it  allows you to tackle your urgent financial needs with utmost ease.

At Tata capital, we strive to ease your financial worries with our range of multipurpose personal loans online. Get affordable and unsecured credit of up to Rs. 35 lakhs at attractive interest rates. The best part? We have made the loan process extremely convenient for you with our digital application process and easy-to-meet eligibility criteria.

Besides, we offer flexible loan tenure of up to 6 years, making your loan repayment much easier on your pocket. Get ready to experience a hassle-free loan process like never before – enjoy fast loan processing and customised instant personal loan offerings depending on your diverse financial needs.`;


WhenCard:any =[
  {cardTitle:'Debt Consolidation',cardBody:'Is keeping track of multiple loan instalments becoming a challenge? Manage your personal finances better by consolidating your existing loans into one and clearing dues comfortably. Avail of a quick and easy loan from Tata Capital and reduce your EMI burden considerably.'},
  
  {cardTitle:'Start a Small Business',cardBody:'Lay the foundation for your small business without difficulty with Tata Capitals Personal Loan onlineInstant approval and minimal documentation ensure you can get the funds faster and realise your entrepreneurial dream sooner.'},

  {cardTitle:'Make a Down Payment',cardBody:'Struggling to arrange the down payment for the property you want to buy? With Tata Capital, you can book your dream house without any difficulty. Get a personal loan online within minutes of approval and at competitive rates.'},
  
  {cardTitle:'Cover Relocation Charges',cardBody:'From transportation charges to buying home essentials, moving from one city to another accompanies a slew of expenses. To make sure the process is easy on your pockets, get an instant personal loan from Tata Capital and repay the amount in flexible EMIs.'},
]

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

  
decreaseLA(loanAmount:number){
  console.log('buttonclicked');
  if(this.valueLA>75000){
   this.valueLA-=500
  }
  else{
     this.valueLA = 75000
  }
  
}

}
