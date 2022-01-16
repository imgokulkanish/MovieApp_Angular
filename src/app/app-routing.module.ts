import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:"", pathMatch:"full", redirectTo:"home"},
  { path:"home", component:HomeComponent},
  { path:"movie/:movieid", component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
