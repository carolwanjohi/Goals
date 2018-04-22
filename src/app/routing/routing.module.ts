import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import RouterModule and Routes for routing
import { RouterModule, Routes } from '@angular/router';

// Import comoponents
import { GoalComponent } from '../goal/goal.component';
import { GoalDetailsComponent } from '../goal-details/goal-details.component';
import { AboutComponent } from '../about/about.component';
import { NotFoundComponent } from '../not-found/not-found.component';

// Create routes array of type Routes to store routing paths
const routes:Routes = [
  {path:'goals', component:GoalComponent},
  {path:'about', component:AboutComponent},
  {path:'',redirectTo:"/goals",pathMatch:"full"},
  {path:'goals/:id', component:GoalDetailsComponent}, // route with a parameter
  // {path:"#",redirectTo:"/goals",pathMatch:"full"},
  {path:'**', component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
