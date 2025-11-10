import { Component, OnInit, Input } from '@angular/core';
import { KpiService } from 'src/app/services/kpi.service';
import { NgFor  , CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
  imports: [NgFor, CommonModule],
})
export class TicketsComponent implements OnInit {
  @Input() sprintId!: string; // Receive sprintId as input
  tickets: any[] = [];

  constructor(private kpiservice: KpiService) {}

  ngOnInit(): void {
    if (this.sprintId) {
      this.kpiservice.getTicketsBySprintId(this.sprintId).subscribe(
        (data) => {
          this.tickets = data;
        },
        (error) => {
          console.error('Error fetching tickets', error);
        }
      );
    }
  }
}
