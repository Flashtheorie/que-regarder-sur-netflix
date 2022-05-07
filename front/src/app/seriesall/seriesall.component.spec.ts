import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesallComponent } from './seriesall.component';

describe('SeriesallComponent', () => {
  let component: SeriesallComponent;
  let fixture: ComponentFixture<SeriesallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
