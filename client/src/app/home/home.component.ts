import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Movie } from '../_models/movie';
import { MoviesService } from '../_services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  movieName: string = null;
  movies: Observable<Movie[]>;
  genres = ['Documentary', 'Comedy',
    'Drama', 'War', 'Romance', 'Sport',
    'Musical', 'Action', 'Horror',
    'Thriller', 'Crime', 'Adventure',
    'History', 'Mistery', 'Western'];
  selectedGenre = "Crime";



  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    
  }



  SearchMovie() {
    this.movies = this.movieService.searchMovie(this.movieName)
  }

  searchGenre() {
    this.movies = this.movieService.searchByGenres(this.selectedGenre);
    console.log("genres work" + this.selectedGenre)
  }




}
