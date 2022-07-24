import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHelpOfferComponent } from './create-help-offer.component';

describe('CreateHelpOfferComponent', () => {
  let component: CreateHelpOfferComponent;
  let fixture: ComponentFixture<CreateHelpOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateHelpOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHelpOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
