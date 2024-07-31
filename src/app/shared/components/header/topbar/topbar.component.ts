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
  searchControl = new FormControl();
  options: string[] = ['ALOT', 'AFLH']; 
  filteredOptions!: Observable<string[]>;
  showOptions = false;

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

  selectOption(option: string) {
    this.searchControl.setValue(option);
    console.log('Option selected:', option);
  }

  onFocus() {
    this.showOptions = true; // Show the options list when the input is focused
  }

  onBlur() {
    // Use setTimeout to delay the hide action so that the click event on the option can be processed
    setTimeout(() => this.showOptions = false, 100); 
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
