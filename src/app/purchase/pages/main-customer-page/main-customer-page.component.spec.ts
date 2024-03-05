import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCustomerPageComponent } from './main-customer-page.component';

describe('MainCustomerPageComponent', () => {
  let component: MainCustomerPageComponent;
  let fixture: ComponentFixture<MainCustomerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainCustomerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainCustomerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
