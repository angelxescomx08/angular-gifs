import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending-page',
  imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export class TrendingPage {
  gifsService = inject(Gifs)
}
