import { Component } from '@angular/core';
import { ContentService, Content } from '../../services/content.service';
import { HeroComponentComponent } from './hero-component/hero-component.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports:[HeroComponentComponent]
})
export class HomePageComponent {
}

