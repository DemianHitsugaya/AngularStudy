import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDecoComponent } from './comp-deco.component';

describe('CompDecoComponent', () => {
  let component: CompDecoComponent;
  let fixture: ComponentFixture<CompDecoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDecoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
