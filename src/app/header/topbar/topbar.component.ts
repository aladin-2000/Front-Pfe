import { Component } from '@angular/core';


@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  onSearch() {
    // Add your search logic here
    console.log('Performing search');
  }
}
