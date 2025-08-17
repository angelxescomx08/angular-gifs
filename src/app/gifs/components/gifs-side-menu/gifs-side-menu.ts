import { Component } from '@angular/core';
import { SideMenuHeader } from './side-menu-header/side-menu-header';
import { SideMenuOptions } from './side-menu-options/side-menu-options';

@Component({
  selector: 'app-gifs-side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './gifs-side-menu.html',
  styleUrl: './gifs-side-menu.css'
})
export class GifsSideMenu {

}
