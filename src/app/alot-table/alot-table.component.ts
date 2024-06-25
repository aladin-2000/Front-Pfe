import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alot-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alot-table.component.html',
  styleUrl: './alot-table.component.css'
})
export class AlotTableComponent implements OnInit {
  dropdownControl = new FormControl('');
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Another Option'];
  filteredOptions: string[] = [];
  dropdownOpen: boolean = false;

  ngOnInit() {
    this.filteredOptions = this.options;
    this.dropdownControl.valueChanges.subscribe(() => {
      this.filterOptions();
    });
  }

  filterOptions() {
    const filterValue = this.dropdownControl.value ? this.dropdownControl.value.toLowerCase() : '';
    this.filteredOptions = this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  selectOption(option: string) {
    this.dropdownControl.setValue(option);
    this.dropdownOpen = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
    this.filterOptions();  // Ensure options are filtered when dropdown opens
  }

  closeDropdown() {
    // Delay closing to allow click event to register on the option
    setTimeout(() => {
      this.dropdownOpen = false;
    }, 200);
  }
}
