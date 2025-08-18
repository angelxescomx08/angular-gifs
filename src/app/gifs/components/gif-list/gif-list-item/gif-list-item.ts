import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/types/gif.type';

@Component({
  selector: 'app-gif-list-item',
  imports: [],
  templateUrl: './gif-list-item.html',
  styleUrl: './gif-list-item.css'
})
export class GifListItem {
  gif = input.required<Gif>();
}
