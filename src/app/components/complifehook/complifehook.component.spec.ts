import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplifehookComponent } from './complifehook.component';

describe('ComplifehookComponent', () => {
  let component: ComplifehookComponent;
  let fixture: ComponentFixture<ComplifehookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplifehookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplifehookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
