import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AllComponent } from './all/all.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SingleMovieComponent } from './singlemovie/singlemovie.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SeriesallComponent } from './seriesall/seriesall.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { NavbarConnectedComponent } from './navbar-connected/navbar-connected.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AllComponent,
    PagenotfoundComponent,
    SingleMovieComponent,
    SearchbarComponent,
    SeriesallComponent,
    LoginPageComponent,
    NavbarConnectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
