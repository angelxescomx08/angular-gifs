import { Gif } from "../types/gif.type";
import { GiphyItem } from "../types/giphy.type";

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    }
  }

  static mapGiphyItemsToGifs(items: GiphyItem[]): Gif[] {
    return items.map(this.mapGiphyItemToGif);
  }
}
