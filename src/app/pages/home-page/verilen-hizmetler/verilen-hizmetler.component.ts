import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HIZMETLERIMIZ } from '../../../../../public/json/hizmetlerimiz';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-verilen-hizmetler',
  templateUrl: './verilen-hizmetler.component.html',
  styleUrls: ['./verilen-hizmetler.component.scss'],
  encapsulation: ViewEncapsulation.Emulated, // Use Emulated encapsulation
  imports: [CommonModule]
})
export class VerilenHizmetlerComponent implements OnInit {
  services: { title: string; description: string; image: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.services = HIZMETLERIMIZ.map((item) => ({
      title: item.title,
      description: item.details.slice(0, 100) + '...', // Truncate for preview
      image: 'images/dis-image.png', // Static image for all services
    }));
  }

  onCardClick(title: string): void {
    // this.router.navigate(['/hizmetlerimiz', title.toLowerCase().replace(/\s+/g, '-')]);
    this.router.navigate(['/hizmetlerimiz', title]);
  }
}
