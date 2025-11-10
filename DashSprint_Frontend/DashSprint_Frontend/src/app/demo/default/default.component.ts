import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiService } from 'src/app/services/kpi.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BajajChartComponent } from './bajaj-chart/bajaj-chart.component';
import { ChartDataMonthComponent } from './chart-data-month/chart-data-month.component';
import { VelocityChartPerYearComponent } from './velocity-chart-year/velocity-chart-year.component';
import { VelocityChartPerTrimesterComponent } from './velocity-chart-trimester/velocity-chart-trimester.component';
import { SprintTableComponent } from './sprint-table/sprint-table.component';
import { TicketsComponent } from './tickets/tickets.component';
@Component({
  selector: 'app-default',
  standalone: true,
  imports: [CommonModule,
    SharedModule,
    BajajChartComponent,
    BarChartComponent,
    ChartDataMonthComponent,
    VelocityChartPerYearComponent,
    VelocityChartPerTrimesterComponent,
    SprintTableComponent,
    TicketsComponent, ],
    
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  totalStoryPoints: number = 0;  // Initialize variable for total story points
  totalStoryPointsCompleted: number = 0;
  totalSprints: number = 0;
  totalSprintsCompleted: number = 0;
  totalTickets: number = 0;
  totalTicketsCompleted: number = 0;
  bugs: number = 0;
  bugsResolved: number =0;

  isLoading: boolean = true;  // Track loading state
  errorMessage: string = '';  // Track error message

  // Existing ListGroup and profileCard as they are
  ListGroup = [
    {
      name: 'Sprint Initialization',
      profit: '30% completion',
      invest: '45 tasks in total',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'Sprint Growth',
      profit: '20% completion',
      invest: '20 tasks in total',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Sprint Stabilization',
      profit: '15% completion',
      invest: '45 tasks in total',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success'
    },
    {
      name: 'Sprint Completion',
      profit: '10% completion',
      invest: '30 tasks in total',
      bgColor: 'bg-light-danger',
      icon: 'ti ti-chevron-down',
      color: 'text-danger'
    },
    {
      name: 'Sprint Refinement',
      profit: '20% completion',
      invest: '10 tasks in total',
      bgColor: 'bg-light-success',
      icon: 'ti ti-chevron-up',
      color: 'text-success',
      space: 'pb-0'
    }
  ];

  profileCard = [
    {
      style: 'bg-primary-dark text-white',
      background: 'bg-primary',
      value: '26 tasks in total',
      text: 'Net Profit',
      color: 'text-white',
      value_color: 'text-white'
    },
    {
      background: 'bg-warning',
      avatar_background: 'bg-light-warning',
      value: '$550K',
      text: 'Total Revenue',
      color: 'text-warning'
    }
  ];

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchTotalStoryPoints();
    this.fetchTotalSprints(); 
    this.fetchTotalTickets;
    this.fetchBugs;
  }
  

  fetchTotalStoryPoints(): void {
    this.kpiService.getTotalStoryPoints().subscribe(
      (response) => {
        if (response.length > 0) {
          const firstItem = response[0];
          this.totalStoryPoints = firstItem.totalStoryPoints;
          this.totalStoryPointsCompleted = firstItem.totalStoryPointsCompleted;
        }
        this.isLoading = false;
      },
    );
  }
  fetchTotalSprints(): void {
    this.kpiService.getTotalSprints().subscribe(
      (response) => {
        if (response.length > 0) {
          const firstItem = response[0];
          this.totalSprints = firstItem.totalSprints;
          this.totalSprintsCompleted = firstItem.totalSprintsCompleted;
        }
        this.isLoading = false;
      },
    );
  }
  fetchTotalTickets(): void {
    this.kpiService.getTotalTickets().subscribe(
      (response) => {
        if (response.length > 0) {
          const firstItem = response[0];
          this.totalTickets = firstItem.totalTickets;
          this.totalTicketsCompleted = firstItem.totalTicketsCompleted;
        }
        this.isLoading = false;
      },
    );
  }
  fetchBugs(): void {
    this.kpiService.getBugs().subscribe(
      (response) => {
        if (response.length > 0) {
          const firstItem = response[0];
          this.bugs = firstItem.bugs;
          this.bugsResolved = firstItem.bugsResolved;
        }
        this.isLoading = false;
      },
    );
  }

  selectedSprintId: string | null = null;

  handleSprintHover(sprintId: string) {
    this.selectedSprintId = sprintId; // Set the sprint ID on hover
  }
  
}
