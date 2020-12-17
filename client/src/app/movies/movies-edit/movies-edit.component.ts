import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { Movie } from '../../_models/movie';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-edit',
  templateUrl: './movies-edit.component.html',
  styleUrls: ['./movies-edit.component.css']
})
export class MoviesEditComponent implements OnInit {
  id: number;
  movie: Movie = {} as any;
  genres = ['Documentary', 'Comedy',
    'Drama', 'War', 'Romance', 'Sport',
    'Musical', 'Action', 'Horror',
    'Thriller', 'Crime', 'Adventure',
    'History', 'Mistery'];

  constructor(private route: ActivatedRoute, private router: Router, private movieService: MoviesService) { }

  ngOnInit(): void {
    this.get_id();
  }

  get_id() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getMovieInfo(this.id);
  }

  getMovieInfo(id) {
    this.movieService.getMovieById(id).subscribe(result => {
      this.movie = result;
    }, error => {
        console.log(error);
    })
  }

  EditMovie() {
    this.movieService.editMovie(this.movie).subscribe();
    this.router.navigate(['/']);
  }

}
