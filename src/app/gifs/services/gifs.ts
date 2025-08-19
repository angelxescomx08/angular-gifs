import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { GiphyResponse } from '../types/giphy.type';
import { environment } from '@environments/environment';
import { GifMapper } from '../mappers/gif.mapper';
import { Gif } from '../types/gif.type';
import { map, tap } from 'rxjs';

function loadHistoryGifs() {
  const history = localStorage.getItem('history');
  if (history) {
    return JSON.parse(history);
  }
  return {};
}

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  trendingGifsPage = signal(0);

  searchHistory = signal<Record<string, Gif[]>>(loadHistoryGifs());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups: Gif[][] = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }
    return groups;
  });

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    if (this.trendingGifsLoading()) return;
    this.trendingGifsLoading.set(true);
    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: this.trendingGifsPage() * 20,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.trendingGifs.update((current) => [...current, ...gifs]);
        this.trendingGifsPage.update((page) => page + 1);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 20,
        },
      })
      .pipe(
        map((response) => {
          return GifMapper.mapGiphyItemsToGifs(response.data);
        }),
        tap((gifs) => {
          this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: gifs,
          }));
          localStorage.setItem('history', JSON.stringify(this.searchHistory()));
        })
      )
  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query.toLowerCase()] || [];
  }
}
