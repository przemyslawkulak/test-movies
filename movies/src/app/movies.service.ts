import { Injectable } from '@angular/core';
import { Movie} from './models/movie'


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [
    {id: 0, title: 'Titanic', description: 'Rok 1912, brytyjski statek Titanic wyrusza w swój dziewiczy rejs do USA. Na pokładzie emigrant Jack przypadkowo spotyka arystokratkę Rose.', year: 1997},
    {id: 1, title: 'Terminator', description: 'Elektroniczny morderca zostaje wysłany z przyszłości do roku 1984, by zabić matkę przyszłego lidera rewolucji. W ślad za nim rusza Kyle Reese, który ma chronić kobietę.', year: 1984},
    {id: 2, title: 'Avatar', description: 'Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.', year: 2009},

  ];

  constructor() { }

  allMovies(): Movie[]{
    return this.movies;
  }
}

