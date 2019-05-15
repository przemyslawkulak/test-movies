import { Injectable } from '@angular/core';
import { Movie} from './models/movie'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [];

  constructor(private http: HttpClient) { }

  allMovies(): Observable<any>{
    return this.http.get('http://localhost:8000/api/movies/');
  }
  getMovie(id: number): Movie {
    return this.movies[id];
  }
}

