import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule} from '@angular/material/form-field';
import { AlotService } from '../../../../../core/services/alot.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-alot-form',
  standalone: true,
imports: [CommonModule,MatSlideToggleModule, MatGridListModule, MatSelectModule, MatFormFieldModule,MatIconModule , FormsModule],
  templateUrl: './alot-form.component.html',
  styleUrl: './alot-form.component.css'
})
export class ALOTFormComponent {
  code: string = 'LOTSKO';

  constructor (private alotService : AlotService){}

 
  aidlot :string = ""
  listAllCreatedWallets(){
    this.alotService.listOfCreatedWallets().subscribe((data)=>{
      console.log(data)
    })
  }
  
}
