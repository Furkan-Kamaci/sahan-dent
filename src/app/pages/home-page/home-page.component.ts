import { Component } from '@angular/core';
import { ContentService, Content } from '../../services/content.service';
import { HeroComponentComponent } from './hero-component/hero-component.component';
import { VerilenHizmetlerComponent } from './verilen-hizmetler/verilen-hizmetler.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports:[HeroComponentComponent, VerilenHizmetlerComponent]
})
export class HomePageComponent {
}

