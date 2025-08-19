import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollStateService {
  private trendingScrollState = signal(0);

  getTrendingScrollState() {
    return this.trendingScrollState();
  }

  setTrendingScrollState(state: number) {
    this.trendingScrollState.set(state);
  }
}
