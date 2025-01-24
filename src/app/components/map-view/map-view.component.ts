import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-map-view',
  imports: [GoogleMapsModule, CommonModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent {
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
}
