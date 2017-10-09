import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPostModalComponent } from './data-post-modal.component';

describe('DataPostModalComponent', () => {
  let component: DataPostModalComponent;
  let fixture: ComponentFixture<DataPostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
