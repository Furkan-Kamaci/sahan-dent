import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-bootstrap',
  imports: [],
  templateUrl: './navbar-bootstrap.component.html',
  styleUrl: './navbar-bootstrap.component.scss'
})
export class NavbarBootstrapComponent {
  toggleNavbar(): void {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.toggle('show');
    }
  }
}
