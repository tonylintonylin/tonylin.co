import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWebsiteComponent } from './first-website.component';

describe('FirstWebsiteComponent', () => {
  let component: FirstWebsiteComponent;
  let fixture: ComponentFixture<FirstWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
