import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gifs } from '../../services/gifs';
import { Gif } from '../../types/gif.type';

@Component({
  selector: 'app-search-page',
  imports: [GifList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export class SearchPage {
  gifsService = inject(Gifs);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifsService.searchGifs(query).subscribe((gifs) => {
      this.gifs.set(gifs);
    });
  }
}
