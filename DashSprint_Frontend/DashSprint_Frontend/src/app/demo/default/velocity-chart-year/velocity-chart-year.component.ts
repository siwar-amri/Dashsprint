import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent, NgApexchartsModule } from 'ng-apexcharts';
import { KpiService } from 'src/app/services/kpi.service';

import {
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexPlotOptions,
  ApexTooltip,
  ApexResponsive,
} from 'ng-apexcharts';
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  colors: string[];
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'velocity-chart-Year',
  standalone: true,
  templateUrl: './velocity-chart-year.component.html',
  styleUrls: ['./velocity-chart-year.component.scss'],
  imports: [NgApexchartsModule, CommonModule], // Add CommonModule here as well
})
export class VelocityChartPerYearComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchVelocityPerYear();
  }

  fetchVelocityPerYear(): void {
    this.kpiService.getVelocityPerYear().subscribe((data) => {
      // Extract year and their velocities
      const years = data.map((velocity: any) => velocity.year.toString());
      const velocities = data.map((velocity: any) => velocity.velocity);

      // Update chart with dynamic data
      this.updateChartPerYear(years, velocities);
    });
  }
  


  updateChartPerYear(years: string[], velocities: number[]): void {
    this.chartOptions = {
      series: [
        {
          name: 'Velocity',
          data: velocities
        },
      ],
      chart: {
        type: 'line',
        height: 350,
        stacked: false, 
        toolbar: {
          show: true
        },
        background: 'transparent'
      },
      colors: ['#007bff', '#673ab7', '#673ab7', '#ede7f6'], // Customize your colors
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%' 
        }
      },
      xaxis: {
        type: 'category',
        categories: years, // Use the years array
        title: {
          text: 'Year'
        }
      },
      yaxis: {
        title: {
          text: 'Velocity'
        }
      },
      tooltip: {
        theme: 'light'
      }
    };
  }
  
}
