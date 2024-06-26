import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './header/topbar/topbar.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { WelcomeComponent } from './home/welcome/welcome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TopbarComponent,NavbarComponent,FooterComponent,WelcomeComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';
}