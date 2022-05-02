import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureSummaryComponent } from './lecture-summary.component';

describe('LectureSummaryComponent', () => {
  let component: LectureSummaryComponent;
  let fixture: ComponentFixture<LectureSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
