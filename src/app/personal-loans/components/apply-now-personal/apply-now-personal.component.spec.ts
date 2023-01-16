import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyNowPersonalComponent } from './apply-now-personal.component';

describe('ApplyNowPersonalComponent', () => {
  let component: ApplyNowPersonalComponent;
  let fixture: ComponentFixture<ApplyNowPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyNowPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyNowPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
