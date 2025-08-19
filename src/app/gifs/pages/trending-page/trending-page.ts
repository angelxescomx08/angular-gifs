import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gifs } from '../../services/gifs';

@Component({
  selector: 'app-trending-page',
  // imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export class TrendingPage {
  gifsService = inject(Gifs)

  scrollRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const scrollOffset = 300;

    const isAtBottom = scrollTop + clientHeight + scrollOffset >= scrollHeight;

    if (isAtBottom) {
      this.gifsService.loadTrendingGifs();
    }
  }
}
