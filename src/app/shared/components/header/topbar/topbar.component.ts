import { Component } from '@angular/core';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ProfileDropdownComponent, CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    console.log('Toggle dropdown method called');
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    console.log('Close dropdown method called');
    this.isDropdownOpen = false;
  }

  onLogout() {
    // Add your logout logic here
    console.log('Logout clicked');
  }

  onSearch() {
    // Add your search logic here
    console.log('Performing search');
  }
}