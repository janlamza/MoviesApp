import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  specificMovie: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.http.get("https://localhost:5001/api/Movies").subscribe(response => {
      this.movies = response;
    }, error => {
      console.log(error);
    })
  }

  getMovieById() {
    this.http.get("https://localhost:5001/api/Movies/1").subscribe(result => {
      this.specificMovie = result;
    }, error => {
      console.log(error);
    })
  }

}
