import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../_models/movie';
import { MovieAdd } from '../_models/movie-add';
import { MovieDelete } from '../_models/movie-delete';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getMovies() {
    if (this.movies.length > 0) return of(this.movies);
    return this.http.get<Movie[]>(this.baseUrl + 'Movies').pipe(
      map(response => {
        this.movies = response
        return response;
      }) 
    )
  }


  getMovieById(id: number) {
    const movie = this.movies.find(x => x.id === id);
    if (movie !== undefined) return of(movie);
    return this.http.get<Movie>(this.baseUrl + 'Movies/' + id);
  }


  addMovie(movie: MovieAdd) {
    return this.http.post(this.baseUrl + 'Movies/addMovie', movie);
    
  }


  editMovie(movie: Movie) {
    return this.http.put(this.baseUrl + 'Movies/edit', movie).pipe(
      map(() => {
        const index = this.movies.indexOf(movie);
        this.movies[index] = movie;
      })
    )
  }


  deleteMovie(movie: MovieDelete) {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: { "id": movie.id } };
    return this.http.delete<MovieDelete>(this.baseUrl + 'Movies/delete', httpOptions);
    
  }


  searchMovie(movieName: string) {
    return this.http.get<Movie[]>(this.baseUrl + 'Movies/Search/' + movieName);
  }

  searchByGenres(SelectedGenre: string) {
    return of(this.movies.filter(match => match.genres === SelectedGenre))
  }

}
