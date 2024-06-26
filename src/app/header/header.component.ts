import { Component } from '@angular/core';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TopbarComponent,NavbarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}