// angular import
import { Component } from '@angular/core';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
    selector: 'app-user-profile',
    imports: [SharedModule],
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    standalone: true,
})
export default class UserProfileComponent {}
