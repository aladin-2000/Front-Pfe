import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-alot-form',
  standalone: true,
imports: [CommonModule,MatSlideToggleModule, MatGridListModule, MatSelectModule, MatFormFieldModule ],
  templateUrl: './alot-form.component.html',
  styleUrl: './alot-form.component.css'
})
export class ALOTFormComponent {
  code: string = 'LOTSKO';
}
