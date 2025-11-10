import { Component } from '@angular/core';
import { SpinnerComponent } from "./theme/shared/components/spinner/spinner.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'Berry Angular Free Version';
}
