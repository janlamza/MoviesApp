import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Movie } from '../../_models/movie';
import { Pagination } from '../../_models/pagination';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  //@Input() movies$: Observable<Movie[]>;
  specificMovie: any;

  @Input() movies: Movie[];
  pagination: Pagination;
  pageNumber = 1;
  pageSize = 8;


  constructor(private http: HttpClient, private moviesService: MoviesService) { }

  ngOnInit() {
    //  this.movies$ = this.moviesService.getMovies();
    this.loadMovies();
  }

  loadMovies() {
    this.moviesService.getMovies(this.pageNumber, this.pageSize).subscribe(response => {
      this.movies = response.result;
      this.pagination = response.pagination;
    })
  }

  pageChanged(event: any) {
    this.pageNumber = event.page;
    this.loadMovies();
  }


  


}
