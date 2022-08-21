import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessHelpOfferReservationDialogComponent } from './success-help-offer-reservation-dialog.component';

describe('SuccessDialogComponent', () => {
  let component: SuccessHelpOfferReservationDialogComponent;
  let fixture: ComponentFixture<SuccessHelpOfferReservationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessHelpOfferReservationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessHelpOfferReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
