import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumFolderGridComponent } from './album-folder-grid.component';

describe('AlbumFolderGridComponent', () => {
  let component: AlbumFolderGridComponent;
  let fixture: ComponentFixture<AlbumFolderGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumFolderGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumFolderGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
