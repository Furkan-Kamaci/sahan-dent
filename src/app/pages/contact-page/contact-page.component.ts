import { Component } from '@angular/core';
import { PhoneButtonComponent } from '../home-page/phone-button/phone-button.component';
import { WhatsappButtonComponent } from '../home-page/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-contact-page',
  imports: [PhoneButtonComponent, WhatsappButtonComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {
  onSubmit() {
    alert('Message submitted! Thank you for contacting us.');
  }
}
