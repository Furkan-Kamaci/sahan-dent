import { Component } from '@angular/core';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { VerilenHizmetlerComponent } from './verilen-hizmetler/verilen-hizmetler.component';
import { FiyatlandirmaComponent } from './fiyatlandirma/fiyatlandirma.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports:[HeroComponentComponent, VerilenHizmetlerComponent, FiyatlandirmaComponent]
})
export class HomePageComponent {
}

