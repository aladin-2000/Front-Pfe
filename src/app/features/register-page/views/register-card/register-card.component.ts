import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-card',
  standalone: true,
  imports: [],
  templateUrl: './register-card.component.html',
  styleUrl: './register-card.component.css'
})
export class RegisterCardComponent {
  loginForm=new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
}