/* Barrels start */
import { Routes } from '@angular/router';
/* Barrels end */
import { AppComponent } from './01/app.component';
import { CalendarComponent } from './02/calendar.component';
import { HomeComponent} from './home/home.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: '**', component: HomeComponent }
]