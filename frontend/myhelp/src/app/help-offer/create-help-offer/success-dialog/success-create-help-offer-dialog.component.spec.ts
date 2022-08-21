import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCreateHelpOfferDialogComponent } from './success-create-help-offer-dialog.component';

describe('SuccessDialogComponent', () => {
  let component: SuccessCreateHelpOfferDialogComponent;
  let fixture: ComponentFixture<SuccessCreateHelpOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessCreateHelpOfferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCreateHelpOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
