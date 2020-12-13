import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../_models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: any;
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get<Movie[]>(this.baseUrl + 'Movies');
  }
  getMovieById(id: number) {
    return this.http.get<Movie>(this.baseUrl + 'Movies/' + id);
  }
}
