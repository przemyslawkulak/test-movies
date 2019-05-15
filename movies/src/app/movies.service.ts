import { Injectable } from '@angular/core';
import { Movie} from './models/movie'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: String = environment.apiURL;

  constructor(private http: HttpClient) { }

  allMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/movies/`);
  }
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/api/movies/${id}/`);
  }
}

