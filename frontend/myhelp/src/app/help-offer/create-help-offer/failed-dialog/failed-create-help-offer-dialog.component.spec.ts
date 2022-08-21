import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailedCreateHelpOfferDialogComponent } from './failed-create-help-offer-dialog.component';

describe('FailedDialogComponent', () => {
  let component: FailedCreateHelpOfferDialogComponent;
  let fixture: ComponentFixture<FailedCreateHelpOfferDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FailedCreateHelpOfferDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FailedCreateHelpOfferDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
