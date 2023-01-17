import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-now-personal',
  templateUrl: './apply-now-personal.component.html',
  styleUrls: ['./apply-now-personal.component.scss']
})
export class ApplyNowPersonalComponent implements OnInit {
  selectedEmployment!: string;
  trackApplicationMethod!:string

  

  EmploymentArr:any= [
    {value: 'Salaried', viewValue: 'Salaried'},
    {value: 'Self-employed', viewValue: 'Self-employed'},
    {value: 'Others', viewValue: 'Others'},
  ];
  selectedGender!:string
  GenderArr:any= [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
    {value: 'Other', viewValue: 'Other'},
  ];
  NewCustomer:FormGroup = this._formBuilder.group({
    Employment_Type:['',[Validators.required]],
    Mobile: ['', Validators.required],
    PAN: ['', Validators.required],
    'FName': ['', Validators.required],
    LName: ['', Validators.required],
    Dob: ['', Validators.required],
    Gender: ['', Validators.required],
    Pincode: ['', Validators.required],
    City: ['', Validators.required],
    'Agreement': [false, Validators.required],

  });
  ExistingCustomer = this._formBuilder.group({
    Mobile: ['', Validators.required],
  });

  TrackForm = this._formBuilder.group({
    Mobile: ['', Validators.required],
    PAN: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    
  }

  NewCustomerFormSubmit(){
    if(this.NewCustomer.controls['Employment_Type'].value ==='Self-employed'){
      this.NewCustomer.removeControl('FName');
      this.NewCustomer.removeControl('LName');
      this.NewCustomer.removeControl('PAN');
      this.NewCustomer.removeControl('Dob');
      this.NewCustomer.removeControl('Gender');
      this.NewCustomer.removeControl('Pincode');
      this.NewCustomer.removeControl('City');
    }
    console.log(this.NewCustomer.value);

    this.NewCustomer.reset()
    
  }

}
