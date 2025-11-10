// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
    selector: 'app-services',
    imports: [SharedModule],
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
    standalone: true,
})
export default class servicesComponent {}
