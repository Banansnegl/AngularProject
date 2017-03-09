/* Barrels start */
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
/* Barrels End */

import { rootRouterConfig } from './app.routes';

import { HomeComponent} from './home/home.component';
import { AppComponent } from './01/app.component';
import { CalendarComponent } from './02/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
