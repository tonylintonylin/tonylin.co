import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumn5Component } from './two-column5.component';

describe('TwoColumn5Component', () => {
  let component: TwoColumn5Component;
  let fixture: ComponentFixture<TwoColumn5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumn5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumn5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
