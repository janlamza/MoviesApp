import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieAdd } from '../../_models/movie-add';

import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-add',
  templateUrl: './movies-add.component.html',
  styleUrls: ['./movies-add.component.css']
})
export class MoviesAddComponent implements OnInit {

  movie: MovieAdd = {} as any;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  genres = ['Documentary', 'Comedy',
    'Drama', 'War', 'Romance', 'Sport',
    'Musical', 'Action', 'Horror',
    'Thriller', 'Crime', 'Adventure',
    'History', 'Mistery'];

  ngOnInit() {

  }

  addMovie() {

    this.moviesService.addMovie(this.movie).subscribe(response => {
      console.log(response);
    }, error => {
        console.log(error);
    })
    this.router.navigate(['']);
    
  }

}
