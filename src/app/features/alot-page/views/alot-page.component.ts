import { Component, OnInit } from '@angular/core';
import { AlotTableComponent } from './alot-table/views/alot-table.component';
import { ALOTFormComponent } from './alot-form/views/alot-form.component';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { AlotService } from '../../../core/services/alot.service';
import { Wallet } from '../../../core/models/wallet.model';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-alot-page',
  standalone: true,
  imports: [AlotTableComponent,ALOTFormComponent,HeaderComponent,FooterComponent, CommonModule],
  templateUrl: './alot-page.component.html',
  styleUrl: './alot-page.component.css'
})
export class AlotPageComponent implements OnInit{
  portefeuilles: any;
  showAdditionalContent = false;
  
  constructor(private alotService:AlotService) { }


  ngOnInit(): void {
    // Initially, only the form is shown
    this.showAdditionalContent = false;
  }


  public getPortefeuilles(): void {
    this.alotService.GetPortefeuilles().subscribe((data: Wallet[]) => {
      this.portefeuilles = data;
      console.log(data);
      this.showAdditionalContent = true; // Show additional content once data is fetched
    });
  }

}
