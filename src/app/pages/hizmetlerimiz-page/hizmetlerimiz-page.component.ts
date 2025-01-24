import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Card {
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-hizmetlerimiz-page',
  templateUrl: './hizmetlerimiz-page.component.html',
  styleUrls: ['./hizmetlerimiz-page.component.scss'],
  imports:[CommonModule]
})
export class HizmetlerimizPageComponent {
  cards: Card[] = [
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Hijyen' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Tedavi' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Bakım' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Estetik' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Kontrol' },
  ];
}
