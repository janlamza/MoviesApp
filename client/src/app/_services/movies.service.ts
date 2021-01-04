import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Movie } from '../_models/movie';
import { MovieAdd } from '../_models/movie-add';
import { MovieDelete } from '../_models/movie-delete';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PaginatedResult } from '../_models/pagination';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  movies: Movie[] = [];
  baseUrl = environment.apiUrl;
  paginatedResult: PaginatedResult<Movie[]> = new PaginatedResult<Movie[]>();
  moviesCache = new Map();

  constructor(private http: HttpClient) { }




  getMovies(page?: number, itemsPerPage?: number) {

    


    let params = new HttpParams();
    if (page !== null && itemsPerPage !== null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }
    
    return this.http.get<Movie[]>(this.baseUrl + 'Movies', { observe: 'response', params }).pipe(
      map(response => {
        this.paginatedResult.result = response.body;
        if (response.headers.get('Pagination') !== null) {
          this.paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
        }
        return this.paginatedResult;
      }) 
    )
  }


  getMovieById(id: number) {
    const movie = this.paginatedResult.result.find(x => x.id === id);
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
    return this.http.get<Movie[]>(this.baseUrl + 'Movies/genre/' + SelectedGenre);
  }

}
