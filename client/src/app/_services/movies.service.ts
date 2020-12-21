import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../_models/movie';
import { MovieAdd } from '../_models/movie-add';
import { MovieDelete } from '../_models/movie-delete';

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
  addMovie(movie: MovieAdd) {
    return this.http.post(this.baseUrl + 'Movies/addMovie', movie);
  }
  editMovie(movie: Movie) {
    return this.http.put(this.baseUrl + 'Movies/edit', movie);
  }
  deleteMovie(movie: MovieDelete) {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: { "id": movie.id } };
    return this.http.delete<MovieDelete>(this.baseUrl + 'Movies/delete', httpOptions);
  }
}
