import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gifs } from '../../services/gifs';
import { ScrollStateService } from 'src/app/shared/services/scroll-state';

@Component({
  selector: 'app-trending-page',
  // imports: [GifList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export class TrendingPage implements AfterViewInit {
  gifsService = inject(Gifs)
  scrollStateService = inject(ScrollStateService)

  scrollRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollRef()?.nativeElement;
    if (!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.getTrendingScrollState();
  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;

    const scrollOffset = 300;

    const isAtBottom = scrollTop + clientHeight + scrollOffset >= scrollHeight;

    this.scrollStateService.setTrendingScrollState(scrollTop);

    if (isAtBottom) {
      this.gifsService.loadTrendingGifs();
    }
  }
}
