import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutDialogConfirmation } from './logout-dialog-confirmation.component';

describe('SuccessDialogComponent', () => {
  let component: LogoutDialogConfirmation;
  let fixture: ComponentFixture<LogoutDialogConfirmation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutDialogConfirmation ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutDialogConfirmation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
