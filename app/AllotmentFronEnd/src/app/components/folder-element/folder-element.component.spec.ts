import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderElementComponent } from './folder-element.component';

describe('FolderElementComponent', () => {
  let component: FolderElementComponent;
  let fixture: ComponentFixture<FolderElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolderElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
