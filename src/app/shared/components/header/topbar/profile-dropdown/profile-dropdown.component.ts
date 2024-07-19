import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css'], 
  imports: [CommonModule]
})
export class ProfileDropdownComponent {
  @Input() isOpen = false;

  @Output() logoutClicked = new EventEmitter<void>();
  @Output() close = new EventEmitter<void>();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  closeDropdown() {
    this.isOpen = false;
    this.close.emit();
  }

  logout() {
    this.logoutClicked.emit();
    this.closeDropdown();
  }
}