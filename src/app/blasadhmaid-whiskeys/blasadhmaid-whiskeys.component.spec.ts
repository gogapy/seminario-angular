import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasadhmaidWhiskeysComponent } from './blasadhmaid-whiskeys.component';

describe('BlasadhmaidWhiskeysComponent', () => {
  let component: BlasadhmaidWhiskeysComponent;
  let fixture: ComponentFixture<BlasadhmaidWhiskeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlasadhmaidWhiskeysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlasadhmaidWhiskeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
