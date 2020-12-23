import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesCardComponent } from './movies/movies-card/movies-card.component';
import { MoviesEditComponent } from './movies/movies-edit/movies-edit.component';
import { MoviesInfoComponent } from './movies/movies-info/movies-info.component';
import { LogInComponent } from './registration/log-in/log-in.component';
import { SignUpComponent } from './registration/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { MoviesAddComponent } from './movies/movies-add/movies-add.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MoviesListComponent,
    MoviesCardComponent,
    MoviesEditComponent,
    MoviesInfoComponent,
    LogInComponent,
    SignUpComponent,
    HomeComponent,
    MoviesAddComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
