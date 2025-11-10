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
  selector: 'app-bar-chart',
  standalone: true,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  imports: [NgApexchartsModule, CommonModule] // Add CommonModule here as well
})
export class BarChartComponent implements OnInit {
  @ViewChild('chart') chart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData(): void {
    this.kpiService.getSprints().subscribe((data) => {
      // Extract sprint names, completed and estimated story points
      const sprintNames = data.map((sprint: any) => sprint.name);
      const completedStoryPoints = data.map((sprint: any) => sprint.completedStoryPoints || 0); // Default to 0 if null
      const estimatedStoryPoints = data.map((sprint: any) => sprint.estimatedStoryPoints || 0);

      // Update chart with dynamic data
      this.updateChart(sprintNames, completedStoryPoints, estimatedStoryPoints);
    });
  }

  updateChart(sprintNames: string[], completedPoints: number[], estimatedPoints: number[]): void {
    this.chartOptions = {
      series: [
        {
          name: 'Completed Story Points',
          data: completedPoints
        },
        {
          name: 'Estimated Story Points',
          data: estimatedPoints
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        stacked: false, // Keep the bars separate
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
          columnWidth: '50%' // Adjust the column width as necessary
        }
      },
      xaxis: {
        type: 'category',
        categories: sprintNames, // Dynamic sprint names
        title: {
          text: 'Sprints'
        }
      },
      yaxis: {
        title: {
          text: 'Story Points'
        }
      },
      tooltip: {
        theme: 'light'
      }
    };
  }
}
