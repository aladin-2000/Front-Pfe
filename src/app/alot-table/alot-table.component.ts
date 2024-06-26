// import { Component, OnInit } from '@angular/core';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-alot-table',
//   standalone: true,
//   imports: [CommonModule, ReactiveFormsModule],
//   templateUrl: './alot-table.component.html',
//   styleUrl: './alot-table.component.css'
// })
// export class AlotTableComponent implements OnInit {
//   dropdownControl = new FormControl('');
//   options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Another Option'];
//   filteredOptions: string[] = [];
//   dropdownOpen: boolean = false;

//   ngOnInit() {
//     this.filteredOptions = this.options;
//     this.dropdownControl.valueChanges.subscribe(() => {
//       this.filterOptions();
//     });
//   }

//   filterOptions() {
//     const filterValue = this.dropdownControl.value ? this.dropdownControl.value.toLowerCase() : '';
//     this.filteredOptions = this.options.filter(option =>
//       option.toLowerCase().includes(filterValue)
//     );
//   }

//   selectOption(option: string) {
//     this.dropdownControl.setValue(option);
//     this.dropdownOpen = false;
//   }

//   toggleDropdown() {
//     this.dropdownOpen = !this.dropdownOpen;
//     this.filterOptions();  // Ensure options are filtered when dropdown opens
//   }

//   closeDropdown() {
//     // Delay closing to allow click event to register on the option
//     setTimeout(() => {
//       this.dropdownOpen = false;
//     }, 200);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alot-table',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alot-table.component.html',
  styleUrls: ['./alot-table.component.css']
})
export class AlotTableComponent implements OnInit {
  dropdownControls: FormControl[] = [];
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Another Option'];
  filteredOptions: string[][] = [];
  dropdownOpen: boolean[] = [];

  ngOnInit() {
    for (let i = 0; i < 3; i++) { // assuming 3 columns, adjust as needed
      this.dropdownControls.push(new FormControl(''));
      this.filteredOptions.push(this.options);
      this.dropdownOpen.push(false);

      this.dropdownControls[i].valueChanges.subscribe(() => {
        this.filterOptions(i);
      });
    }
  }

  filterOptions(index: number) {
    const filterValue = this.dropdownControls[index].value ? this.dropdownControls[index].value.toLowerCase() : '';
    this.filteredOptions[index] = this.options.filter(option =>
      option.toLowerCase().includes(filterValue)
    );
  }

  selectOption(index: number, option: string) {
    this.dropdownControls[index].setValue(option);
    this.dropdownOpen[index] = false;
  }

  toggleDropdown(index: number) {
    this.dropdownOpen[index] = !this.dropdownOpen[index];
    this.filterOptions(index);  // Ensure options are filtered when dropdown opens
  }

  closeDropdown(index: number) {
    // Delay closing to allow click event to register on the option
    setTimeout(() => {
      this.dropdownOpen[index] = false;
    }, 200);
  }
}

