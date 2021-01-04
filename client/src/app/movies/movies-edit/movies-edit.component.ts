import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { Movie } from '../../_models/movie';
import { MovieDelete } from '../../_models/movie-delete';
import { MoviesService } from '../../_services/movies.service';
import { RoutingService } from '../../_services/routing.service';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {
  id: number;
  movie: Movie = {} as any;
  deleteMovie: MovieDelete = {} as any;
  genres = ['Documentary', 'Comedy',
    'Drama', 'War', 'Romance', 'Sport',
    'Musical', 'Action', 'Horror',
    'Thriller', 'Crime', 'Adventure',
    'History', 'Mistery', 'Western'];

  constructor(private route: ActivatedRoute, private movieService: MoviesService,
    private routingService: RoutingService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.get_id();
  }

  //get id from url route
  get_id() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getMovieInfo(this.id);
  }

  //get movie details by get_movie_by_id service call
  getMovieInfo(id) {
    this.movieService.getMovieById(id).subscribe(result => {
      this.movie = result;
      
    }, error => {
        console.log(error);
    })
  }

  //edit--- update movie service call
  EditMovie() {
    this.movieService.editMovie(this.movie).subscribe(response => {
      this.toastr.success("changes saved", "Success!");
    });
    this.routingService.redirectToHome('/');
    
  }

  //delete movie service call
  DeleteMovie() {
    this.deleteMovie.id = this.id;
    this.movieService.deleteMovie(this.deleteMovie).subscribe(response => {
      this.toastr.info("Movie deleted", "Delete Successful");
    })
    this.routingService.redirectToHome('/');
  }
  
  Leave() {
    this.routingService.redirectToHome('/');
  }

}
