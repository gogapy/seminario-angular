import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasadhmaidAboutComponent } from './blasadhmaid-about.component';

describe('BlasadhmaidAboutComponent', () => {
  let component: BlasadhmaidAboutComponent;
  let fixture: ComponentFixture<BlasadhmaidAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlasadhmaidAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlasadhmaidAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
