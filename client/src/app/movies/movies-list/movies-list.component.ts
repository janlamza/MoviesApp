import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: any;
  specificMovie: any;

  constructor(private http: HttpClient, private moviesService: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }


  getMovies() {
    this.moviesService.getMovies().subscribe(response => {
      this.movies = response
    }, error => {
        console.log(error);
    })
  }


}
