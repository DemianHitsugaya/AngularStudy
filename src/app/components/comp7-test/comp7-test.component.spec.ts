import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp7TestComponent } from './comp7-test.component';

describe('Comp7TestComponent', () => {
  let component: Comp7TestComponent;
  let fixture: ComponentFixture<Comp7TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp7TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp7TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
