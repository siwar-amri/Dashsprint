import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityChartPerTrimesterComponent } from './velocity-chart-trimester.component';

describe('VelocityChartTrimesterComponent', () => {
  let component: VelocityChartPerTrimesterComponent;
  let fixture: ComponentFixture<VelocityChartPerTrimesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VelocityChartPerTrimesterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VelocityChartPerTrimesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
