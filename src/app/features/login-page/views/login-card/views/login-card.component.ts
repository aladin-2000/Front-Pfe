import { Component } from '@angular/core';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-card.component.html',
  styleUrl: './login-card.component.css'
})
export class LoginCardComponent {
     loginForm=new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
}