import { Component, OnInit } from '@angular/core';
import { Movie} from '../models/movie'
import { MoviesService } from '../movies.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  movies: Movie[];
  message: String = '';

  constructor( private mS:MoviesService) { }

  ngOnInit() {
    this.mS.allMovies().subscribe(
      (data)=>{
        this.movies = data;
      },
      (error) => {
        this.message = "Error. Try again later.";
        console.log(error);
      }
      );
    console.table(this.movies)
  }
 

}
