import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {
  public mapStyles = { width: '90vw', height: '90vw' }; // Default to mobile

  center: google.maps.LatLngLiteral = { lat: 40.0982, lng: 26.3955 };
  // zoom = 15;
  zoom = 15;
  options: google.maps.MapOptions = {
    scrollwheel: true,
  };

  markers = [
    // { position: { lat: 37.7749, lng: -122.4194 }, label: 'A' },
    // { position: { lat: 37.7849, lng: -122.4094 }, label: 'B' },
    { position: { lat: 40.0982, lng: 26.3955 } },
  ];

  constructor() {
    console.log("innerWidth: ", window.innerWidth);
    this.updateMapStyles(window.innerWidth); // Initial style
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateMapStyles(event.target.innerWidth);
  }

  private updateMapStyles(width: number) {
    if (width <= 768) {
      // Mobile styles
      this.mapStyles = { width: '90vw', height: '90vw' };
    } else {
      // Desktop styles
      this.mapStyles = { width: '80vw', height: '60vh' };
    }
  }
}
