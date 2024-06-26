import { Component } from '@angular/core';
import { ALOTFormComponent } from '../alot-form/alot-form.component';
import { AlotTableComponent } from '../alot-table/alot-table.component';


@Component({
  selector: 'app-content',
  standalone: true,
  imports: [ALOTFormComponent, AlotTableComponent ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
