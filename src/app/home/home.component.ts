import { Component } from '@angular/core';
import { HeaderComponent} from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,WelcomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
