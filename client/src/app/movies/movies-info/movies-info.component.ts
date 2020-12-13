import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../_models/movie';
import { MoviesService } from '../../_services/movies.service';

@Component({
  selector: 'app-movies-info',
  templateUrl: './movies-info.component.html',
  styleUrls: ['./movies-info.component.css']
})
export class MoviesInfoComponent implements OnInit {
  id: number;
  movie: Movie;
  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit(){
    this.get_id();
    
  }
  get_id() {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.getMovieInfo(this.id);
  }

  getMovieInfo(id) {
    this.moviesService.getMovieById(id).subscribe(result => {
      this.movie = result;
    }, error => {
        console.log(error);
    })
  }

}
