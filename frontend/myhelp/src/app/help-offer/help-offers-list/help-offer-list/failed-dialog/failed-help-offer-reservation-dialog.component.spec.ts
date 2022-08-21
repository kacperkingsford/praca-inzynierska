import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedHelpOfferReservationDialogComponent } from './failed-help-offer-reservation-dialog.component';

describe('FailedDialogComponent', () => {
  let component: FailedHelpOfferReservationDialogComponent;
  let fixture: ComponentFixture<FailedHelpOfferReservationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedHelpOfferReservationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedHelpOfferReservationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
