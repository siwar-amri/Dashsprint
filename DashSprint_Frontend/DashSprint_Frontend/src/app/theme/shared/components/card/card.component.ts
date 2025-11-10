import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
    standalone: true
})
export class CardComponent {
  // public props
  @Input() cardTitle: string;
  @Input() customHeader: boolean;
}
