import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { error } from 'protractor';
import { Observable } from 'rxjs';
import { Movie } from '../../_models/movie';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() movies$: Observable<Movie[]>;
  specificMovie: any;

  constructor(private http: HttpClient, private moviesService: MoviesService) { }

  ngOnInit() {
    
      this.movies$ = this.moviesService.getMovies();
  }


  


}
