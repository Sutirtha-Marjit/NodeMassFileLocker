import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateResourceContainerComponent } from './create-resource-container.component';
import {} from 'jasmine';

describe('CreateResourceContainerComponent', () => {
  let component: CreateResourceContainerComponent;
  let fixture: ComponentFixture<CreateResourceContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResourceContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResourceContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
