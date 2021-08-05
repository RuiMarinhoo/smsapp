import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCallComponent } from './custom-call.component';

describe('CustomCallComponent', () => {
  let component: CustomCallComponent;
  let fixture: ComponentFixture<CustomCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
