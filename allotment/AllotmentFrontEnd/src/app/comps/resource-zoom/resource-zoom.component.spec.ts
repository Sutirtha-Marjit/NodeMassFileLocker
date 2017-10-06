import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceZoomComponent } from './resource-zoom.component';

describe('ResourceZoomComponent', () => {
  let component: ResourceZoomComponent;
  let fixture: ComponentFixture<ResourceZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
