import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityChartPerYearComponent } from './velocity-chart-year.component';

describe('VelocityChartComponent', () => {
  let component: VelocityChartPerYearComponent;
  let fixture: ComponentFixture<VelocityChartPerYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocityChartPerYearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityChartPerYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
