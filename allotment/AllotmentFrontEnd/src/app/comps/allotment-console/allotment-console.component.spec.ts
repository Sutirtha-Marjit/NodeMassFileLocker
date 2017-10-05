import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllotmentConsoleComponent } from './allotment-console.component';

describe('AllotmentConsoleComponent', () => {
  let component: AllotmentConsoleComponent;
  let fixture: ComponentFixture<AllotmentConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllotmentConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllotmentConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
