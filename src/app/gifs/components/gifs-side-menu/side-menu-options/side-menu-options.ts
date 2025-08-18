import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Gifs } from 'src/app/gifs/services/gifs';

type MenuOption = {
  icon: string;
  label: string;
  route: string;
  subLabel: string;
}

@Component({
  selector: 'app-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css'
})
export class SideMenuOptions {

  gifsService = inject(Gifs)

  menuOptions: MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line",
      label: "Trending",
      route: "/dashboard/trending",
      subLabel: "Gifs populares"
    },
    {
      icon: "fa-solid fa-search",
      label: "Buscador",
      route: "/dashboard/search",
      subLabel: "Buscar gifs"
    }
  ]
}
