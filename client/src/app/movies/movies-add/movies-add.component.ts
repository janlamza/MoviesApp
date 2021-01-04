import { error } from '@angular/compiler/src/util';
import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MovieAdd } from '../../_models/movie-add';

import { MoviesService } from '../../_services/movies.service';
import { RoutingService } from '../../_services/routing.service';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  movie: MovieAdd = {} as any;

  constructor(private moviesService: MoviesService, private toastr: ToastrService,
    private routingService: RoutingService) { }

  genres = ['Documentary', 'Comedy',
    'Drama', 'War', 'Romance', 'Sport',
    'Musical', 'Action', 'Horror',
    'Thriller', 'Crime', 'Adventure',
    'History', 'Mistery','Western'];

  ngOnInit() {

  }

  addMovie() {
    this.moviesService.addMovie(this.movie).subscribe(response => {
      this.toastr.success("Added movies", "Success!");
      this.routingService.redirectToHome("/");
    }, error => {
        this.toastr.error("Movie exists", "Error!");  
    })
    
    
  }

}
