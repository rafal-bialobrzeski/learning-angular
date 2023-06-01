import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Counter3Component } from './counter3.component';

describe('Counter3Component', () => {
  let component: Counter3Component;
  let fixture: ComponentFixture<Counter3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Counter3Component]
    });
    fixture = TestBed.createComponent(Counter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
