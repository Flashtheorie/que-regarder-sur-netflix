import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SeriesallComponent } from './seriesall/seriesall.component';
import { SingleMovieComponent } from './singlemovie/singlemovie.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'top/movies/all', component: AllComponent},
  { path: 'top/series/all', component: SeriesallComponent},
  { path : 'movies/:id', component: SingleMovieComponent},
  { path : 'login', component: LoginPageComponent},

  { path: '**', pathMatch: 'full', 
        component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
