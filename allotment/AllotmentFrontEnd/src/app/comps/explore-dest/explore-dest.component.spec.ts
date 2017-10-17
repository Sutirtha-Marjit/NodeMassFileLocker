import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreDestComponent } from './explore-dest.component';

describe('ExploreDestComponent', () => {
  let component: ExploreDestComponent;
  let fixture: ComponentFixture<ExploreDestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreDestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreDestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
