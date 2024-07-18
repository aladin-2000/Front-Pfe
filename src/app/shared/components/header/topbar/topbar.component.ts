import { Component, OnInit } from '@angular/core';
import { ProfileDropdownComponent } from './profile-dropdown/profile-dropdown.component';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ProfileDropdownComponent,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.css'
})
export class TopbarComponent implements OnInit{
  isDropdownOpen = false;
  options: string[] = ['ALOT', 'AFLH']; 
  filteredOptions!: Observable<string[]>;

  searchControl = new FormControl();

  constructor() {}

  ngOnInit(): void {
    this.filteredOptions = this.searchControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300), // Optional: Debounce time to wait for user input to settle
      distinctUntilChanged(), // Optional: Only emit when the filter value changes
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().startsWith(filterValue));
  }
  

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
