import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { GiphyResponse } from '../types/giphy.type';
import { environment } from '@environments/environment';
import { GifMapper } from '../mappers/gif.mapper';
import { Gif } from '../types/gif.type';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {
    this.trendingGifsLoading.set(true);
    this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifs(response.data);
        this.trendingGifs.set(gifs);
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
        })
      )
  }
}
