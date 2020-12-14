import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumn2Component } from './two-column2.component';

describe('TwoColumn2Component', () => {
  let component: TwoColumn2Component;
  let fixture: ComponentFixture<TwoColumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoColumn2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
