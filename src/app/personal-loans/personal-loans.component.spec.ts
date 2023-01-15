import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLoansComponent } from './personal-loans.component';

describe('PersonalLoansComponent', () => {
  let component: PersonalLoansComponent;
  let fixture: ComponentFixture<PersonalLoansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalLoansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
