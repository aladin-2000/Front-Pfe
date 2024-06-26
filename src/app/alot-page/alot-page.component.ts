import { Component } from '@angular/core';
import { AlotTableComponent } from './alot-table/alot-table.component';
import { ALOTFormComponent } from './alot-form/alot-form.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-alot-page',
  standalone: true,
  imports: [AlotTableComponent,ALOTFormComponent,HeaderComponent,FooterComponent],
  templateUrl: './alot-page.component.html',
  styleUrl: './alot-page.component.css'
})
export class AlotPageComponent {

}
