import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "Movies app";
  movies: any;
  specificMovie: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMovies();
    this.getMovieById();
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
