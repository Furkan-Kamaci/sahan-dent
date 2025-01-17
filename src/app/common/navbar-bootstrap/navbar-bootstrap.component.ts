import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-bootstrap',
  imports: [RouterModule],
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
