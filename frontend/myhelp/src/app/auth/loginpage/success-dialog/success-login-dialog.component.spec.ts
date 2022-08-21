import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessLoginDialogComponent } from './success-login-dialog.component';

describe('SuccessDialogComponent', () => {
  let component: SuccessLoginDialogComponent;
  let fixture: ComponentFixture<SuccessLoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessLoginDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessLoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
