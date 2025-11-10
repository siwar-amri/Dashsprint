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
  selector: 'velocity-chart-trimester',
  standalone: true,
  templateUrl: './velocity-chart-trimester.component.html',
  styleUrls: ['./velocity-chart-trimester.component.scss'],
  imports: [NgApexchartsModule, CommonModule], // Add CommonModule here as well
})
export class VelocityChartPerTrimesterComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
   
    this.fetchVelocityPerTrimester();
  }

  fetchVelocityPerTrimester(): void {
    this.kpiService.getVelocityPerTrimester().subscribe((data) => {
      
      const trimesters = data.map((velocity: any) => velocity.trimester.toString());
      const velocities = data.map((velocity: any) => velocity.velocity);

      // Update chart with dynamic data
      this.updateChartPerTrimester(trimesters, velocities);
    });
  }


  
  updateChartPerTrimester(trimesters: string[], velocities: number[]): void {
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
        categories: trimesters, // Use the years array
        title: {
          text: 'Trimester'
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
