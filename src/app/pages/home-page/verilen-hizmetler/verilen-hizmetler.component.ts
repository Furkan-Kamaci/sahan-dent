import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-verilen-hizmetler',
  imports: [CommonModule],
  templateUrl: './verilen-hizmetler.component.html',
  styleUrl: './verilen-hizmetler.component.scss',
encapsulation: ViewEncapsulation.ShadowDom,
})
export class VerilenHizmetlerComponent {
  services = [
    {
      title: 'Sağlık Hizmeti 1',
      description: 'Bu hizmet sağlık alanında sunulmaktadır.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sağlık Hizmeti 2',
      description: 'Sağlık hizmetleri arasında popülerdir.',
      image: 'https://via.placeholder.com/150',
    },
    {
      title: 'Sağlık Hizmeti 3',
      description: 'En iyi sağlık hizmetlerinden biridir.',
      image: 'https://via.placeholder.com/150',
    },
  ];

}
