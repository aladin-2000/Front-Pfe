import { Component } from '@angular/core';
import { LoginCardComponent } from '../login-card/views/login-card.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LoginCardComponent,HeaderComponent,FooterComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
