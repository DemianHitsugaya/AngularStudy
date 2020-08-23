import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompbycompComponent } from './compbycomp.component';

describe('CompbycompComponent', () => {
  let component: CompbycompComponent;
  let fixture: ComponentFixture<CompbycompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompbycompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompbycompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
