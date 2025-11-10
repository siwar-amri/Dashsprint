import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KpiService } from 'src/app/services/kpi.service';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-sprint-table',
  templateUrl: './sprint-table.component.html',
  styleUrls: ['./sprint-table.component.scss'],
  imports: [DatePipe, CommonModule, NgFor],
})
export class SprintTableComponent implements OnInit {
  sprints: any[] = [];

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.fetchSprints();
  }

  fetchSprints(): void {
    this.kpiService.getSprints().subscribe((data: any) => {
      this.sprints = data;
    });
  }
  

  tickets: any[] = []; // Holds ticket data
  viewTickets(sprintId: string) {
    this.kpiService.getTicketsBySprintId(sprintId).subscribe(
      (tickets) => {
        this.tickets = tickets; // Populate tickets array
        console.log('Tickets for sprint', sprintId, tickets);
      },
      (error) => {
        console.error('Error fetching tickets:', error);
      }
    );
  }
  @Output() hoveredSprint = new EventEmitter<string | null>(); // Emit sprint ID on hover
  onSprintHover(sprintId: string | null) {
    this.hoveredSprint.emit(sprintId); // Emit the sprint ID (or null on mouse leave)
  }
}
