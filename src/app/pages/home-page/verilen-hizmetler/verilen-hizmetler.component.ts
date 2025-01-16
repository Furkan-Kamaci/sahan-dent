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
      title: 'Diş Çekimi',
      description: 'Hasarlı, çürümüş veya iltihaplı dişlerin çekilmesi gerektiğinde bu işlem uygulanır. Diş çekimi sırasında ağrı ve rahatsızlık minimize edilir.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Ortodontik Tedavi',
      description: 'Dişlerin düzensiz bir şekilde hizalanması veya çene problemleri düzeltilmesi gerektiğinde, diş hekimleri ortodontik tedavi uygularlar.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Pedodonti (Çocuk Diş Hekimliği)',
      description: 'Çocukların ağız ve diş sağlığını takip ederler. Ayrıca çocuklara diş fırçalama alışkanlığı kazandırmak ve diş çürümelerini önlemek için önerilerde bulunurlar.',
      image: 'images/dis-image.png',
    },

    {
      title: 'Diş Çekimi',
      description: 'Hasarlı, çürümüş veya iltihaplı dişlerin çekilmesi gerektiğinde bu işlem uygulanır. Diş çekimi sırasında ağrı ve rahatsızlık minimize edilir.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Ortodontik Tedavi',
      description: 'Dişlerin düzensiz bir şekilde hizalanması veya çene problemleri düzeltilmesi gerektiğinde, diş hekimleri ortodontik tedavi uygularlar.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Pedodonti (Çocuk Diş Hekimliği)',
      description: 'Çocukların ağız ve diş sağlığını takip ederler. Ayrıca çocuklara diş fırçalama alışkanlığı kazandırmak ve diş çürümelerini önlemek için önerilerde bulunurlar.',
      image: 'images/dis-image.png',
    },

    {
      title: 'Diş Çekimi',
      description: 'Hasarlı, çürümüş veya iltihaplı dişlerin çekilmesi gerektiğinde bu işlem uygulanır. Diş çekimi sırasında ağrı ve rahatsızlık minimize edilir.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Ortodontik Tedavi',
      description: 'Dişlerin düzensiz bir şekilde hizalanması veya çene problemleri düzeltilmesi gerektiğinde, diş hekimleri ortodontik tedavi uygularlar.',
      image: 'images/dis-image.png',
    },
    {
      title: 'Pedodonti (Çocuk Diş Hekimliği)',
      description: 'Çocukların ağız ve diş sağlığını takip ederler. Ayrıca çocuklara diş fırçalama alışkanlığı kazandırmak ve diş çürümelerini önlemek için önerilerde bulunurlar.',
      image: 'images/dis-image.png',
    },
  ];

}
