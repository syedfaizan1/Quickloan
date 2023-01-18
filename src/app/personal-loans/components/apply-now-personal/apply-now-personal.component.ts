import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { newCustomerSalaried } from 'src/app/models/model';
import { HttpService } from 'src/app/shared/http.service';

@Component({
  selector: 'app-apply-now-personal',
  templateUrl: './apply-now-personal.component.html',
  styleUrls: ['./apply-now-personal.component.scss'],
})
export class ApplyNowPersonalComponent implements OnInit {
  selectedEmployment!: string;
  trackApplicationMethod!: string;

  EmploymentArr: any = [
    { value: 'Salaried', viewValue: 'Salaried' },
    { value: 'Self-employed', viewValue: 'Self-employed' },
    { value: 'Others', viewValue: 'Others' },
  ];
  selectedGender!: string;
  GenderArr: any = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Other', viewValue: 'Other' },
  ];
  NewCustomer: FormGroup = this._formBuilder.group({
    Employment_Type: ['', [Validators.required]],
    Mobile: ['', Validators.required],
    PAN: ['', Validators.required],
    FName: ['', Validators.required],
    LName: ['', Validators.required],
    Dob: ['', Validators.required],
    Gender: ['', Validators.required],
    Pincode: ['', Validators.required],
    City: ['', Validators.required],
    Agreement: [false, Validators.required],
  });
  ExistingCustomer = this._formBuilder.group({
    Mobile: ['', Validators.required],
  });

  TrackForm = this._formBuilder.group({
    Mobile: ['', Validators.required],
    PAN: ['', Validators.required],
  });
  isLinear = false;

  constructor(
    private _formBuilder: FormBuilder,
    private httpsvc: HttpService
  ) {}

  ngOnInit(): void {}

  NewCustomerFormSubmit() {
    this.httpsvc
      .postNewCustomer('CustomerArr', this.NewCustomer.value)
      .subscribe((res) => {
        console.log(res);
      });

    this.NewCustomer.reset();
  }

  // ExistingCustomerMobileInput = this.ExistingCustomer.value.Mobil
  getExistingCustomerByMobile() {

    this.httpsvc.getExistingCustomer('CustomerArr').subscribe((res) => {

      let ExistingCustomerForm = this.ExistingCustomer.value;

      let ExistingCustomerMobileInput = ExistingCustomerForm.Mobile;

      let CustomerArr: newCustomerSalaried[] = res;

      CustomerArr.find(function (element) {

        if (Number(ExistingCustomerMobileInput) == element.Mobile) {

          console.log(element);
        }
      });
    });
  }
  onClickSkip(){
    document.getElementById("NCbtn")?.click();
  }
}


