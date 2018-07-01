import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralPhotoComponent } from './general-photo.component';

describe('GeneralPhotoComponent', () => {
  let component: GeneralPhotoComponent;
  let fixture: ComponentFixture<GeneralPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
