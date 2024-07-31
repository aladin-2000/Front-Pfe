import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { AlotFormViewModel } from '../viewmodel/alot-form.viewmodel';
import { MatDialog } from '@angular/material/dialog';
import { OverlayCardComponent } from '../../../../../shared/components/overlay-card/overlay-card.component';

@Component({
  selector: 'app-alot-form',
  standalone: true,
imports: [CommonModule,MatSlideToggleModule, MatGridListModule, MatSelectModule, MatFormFieldModule,MatIconModule , FormsModule,MatInputModule,],
  templateUrl: './alot-form.component.html',
  styleUrl: './alot-form.component.css'
})
export class ALOTFormComponent {
  code: string = 'LOTSKO';

  constructor (private alotFormViewModel : AlotFormViewModel,private dialog: MatDialog,){}

 
  aidlot :string = ""

  //Values List for the lots of wallets
  listAllCreatedWallets(): void {
    this.alotFormViewModel.listOfCreatedWallets().subscribe(walletData => {
      console.log(walletData.data)
      this.dialog.open(OverlayCardComponent, {
        data: {
          data: walletData.data,
          displayedColumns: walletData.columns
        }
      });
    });
  }
  }
  

