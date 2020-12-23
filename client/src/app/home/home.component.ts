import { Component, OnInit } from '@angular/core';
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
  constructor(private movieService: MoviesService) { }

  ngOnInit() {

}

  SearchMovie() {

    this.movies = this.movieService.searchMovie(this.movieName)
  }



}
