import { Component } from '@angular/core';
import { AlotTableComponent } from './alot-table/views/alot-table.component';
import { ALOTFormComponent } from './alot-form/views/alot-form.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AlotService } from '../../../core/services/alot.service';
import { Wallet } from '../../../core/models/wallet.model';

@Component({
  selector: 'app-alot-page',
  standalone: true,
  imports: [AlotTableComponent,ALOTFormComponent,HeaderComponent,FooterComponent],
  templateUrl: './alot-page.component.html',
  styleUrl: './alot-page.component.css'
})
export class AlotPageComponent {
  constructor(private alotService:AlotService) { }
  portefeuilles :any

  public getPortefeuilles() : Wallet[]{
    this.alotService.GetPortefeuilles().subscribe((data)=>{
      this.portefeuilles = data;
      console.log(data)
    })
    return this.portefeuilles
    
  }

}
