import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-button',
  imports: [],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss'
})
export class WhatsappButtonComponent {
  @Input() whatsappNumber: string = '05541574117'; // Default number
  @Input() message: string = ''; // Optional message

  getWhatsAppUrl(): string {
    const baseUrl = `https://wa.me/${this.whatsappNumber}`;
    return this.message ? `${baseUrl}?text=${encodeURIComponent(this.message)}` : baseUrl;
  }
}
