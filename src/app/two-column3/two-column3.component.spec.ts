import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumn3Component } from './two-column3.component';

describe('TwoColumn3Component', () => {
  let component: TwoColumn3Component;
  let fixture: ComponentFixture<TwoColumn3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumn3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumn3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
