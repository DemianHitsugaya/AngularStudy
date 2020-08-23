import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComDir1Component } from './com-dir1.component';

describe('ComDir1Component', () => {
  let component: ComDir1Component;
  let fixture: ComponentFixture<ComDir1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComDir1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComDir1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
