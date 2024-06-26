import { Component } from '@angular/core';
import { LoginCardComponent } from './login-card/login-card.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginCardComponent,HeaderComponent,FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
