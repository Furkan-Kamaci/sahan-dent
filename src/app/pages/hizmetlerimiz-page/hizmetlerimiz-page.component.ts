import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Card {
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-hizmetlerimiz-page',
  templateUrl: './hizmetlerimiz-page.component.html',
  styleUrls: ['./hizmetlerimiz-page.component.scss'],
  imports: [CommonModule]
})
export class HizmetlerimizPageComponent {
  cards: Card[] = [
    { imageUrl: '/images/hizmetler/bleaching.png', description: 'Diş beyazlatma (Bleaching)' },
    { imageUrl: '/images/hizmetler/acil-tedavi.png', description: 'Acil Diş Tedavisi' },
    { imageUrl: '/images/hizmetler/implant.png', description: 'İmplant' },
    { imageUrl: '/images/hizmetler/tel.png', description: 'Ortodonti (Tel Tedavisi)' },
    { imageUrl: '/images/hizmetler/plak.png', description: 'Ortodontı (Şeffaf Plak)' },
    { imageUrl: '/images/hizmetler/dolgu.png', description: 'Diş Dolgusu' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Kanal Tedavisi' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Kanal Yineleme (Retreatment)' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Gülüş Tasarımı' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Diş Çekimi' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Cerrahi Çekim' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Hareketli Protez' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Zirkonyum' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Diş Taşı Temizliği' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Laminate' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: '20lik Çekimi' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Botox' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Gece Plağı' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Sabit Protez' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Çocuk Diş Hekimliği (Pedodonti)' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Yer Tutucu' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Dijital Ölçü' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Diş Eti Sağlığı' },
    { imageUrl: '/images/dis-hijyen-belt.jpeg', description: 'Bruksizm Tedavisi' }
  ];
  constructor(private router: Router) { }

  onCardClick(card: Card): void {
    // Navigate to the detail page with the description as a route parameter
    this.router.navigate(['/hizmetlerimiz', card.description]);
  }
}
