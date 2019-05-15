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
  private token: String = '627efd863aa3d0cca044e0c61201cb5efbf6f329';
  private httpHeaders = new HttpHeaders(
    {'Authorization': `Token ${this.token}`}
  )

  constructor(private http: HttpClient) { }

  allMovies(): Observable<any>{
    return this.http.get(`${this.baseUrl}/api/movies/`, 
    {headers:this.httpHeaders});
  }
  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/api/movies/${id}/`, 
    {headers:this.httpHeaders});
  }
}

