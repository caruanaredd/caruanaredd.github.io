import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturePresentationComponent } from './lecture-presentation.component';

describe('LecturePresentationComponent', () => {
  let component: LecturePresentationComponent;
  let fixture: ComponentFixture<LecturePresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturePresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
