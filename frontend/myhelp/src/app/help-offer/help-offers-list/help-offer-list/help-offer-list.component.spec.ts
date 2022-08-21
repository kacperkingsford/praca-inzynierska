import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpOfferListComponent } from './help-offer-list.component';

describe('HelpOfferListComponent', () => {
  let component: HelpOfferListComponent;
  let fixture: ComponentFixture<HelpOfferListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpOfferListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpOfferListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
