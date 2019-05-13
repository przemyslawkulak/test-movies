import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private mS: MoviesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    this.movie = this.mS.getMovie(Number(id));
  }

}
