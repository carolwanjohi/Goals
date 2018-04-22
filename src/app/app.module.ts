import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import FormsModule from forms
import { FormsModule } from '@angular/forms';

// Import HttpClientModule from http requests
import { HttpClientModule } from '@angular/common/http';

// Import NgProgressModule and NgProgressHttpModule fro progress bar
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// Import RoutingModule for routing
import { RoutingModule } from './routing/routing.module';

// Import Service that will be accessible to the entire app
import { AlertsService } from './alert-service/alerts.service';

import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalDetailsComponent } from './goal-details/goal-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    GoalComponent,
    GoalDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    GoalFormComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormModule to the apps imports
    HttpClientModule, // Add HttpClientModule to the apps imports
    NgProgressModule.forRoot(
      {
        spinnerPosition: 'left',
        color: '#f71cff',
        thick: true,
        trickleSpeed: 225,
        min: 20,
        meteor: false
      }
    ), // progressbar with styling
    NgProgressHttpModule, // progressbar to load http requests
    RoutingModule, // 
  ],
  providers: [AlertsService], // Add servie to providers array
  bootstrap: [AppComponent]
})
export class AppModule { }
