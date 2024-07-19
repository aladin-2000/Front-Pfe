import {  Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Wallet } from '../../../core/models/wallet.model';
import { MatCheckbox } from '@angular/material/checkbox';

const WALLET_LIST: Wallet[] = [
  { aidprt: "9911", acdprt: "576", allprt: "000" },
  { aidprt: "9912", acdprt: "576", allprt: "001" },
  { aidprt: "9913", acdprt: "576", allprt: "002" },
  { aidprt: "9914", acdprt: "576", allprt: "003" },
  { aidprt: "9915", acdprt: "576", allprt: "004" },
  { aidprt: "9916", acdprt: "576", allprt: "005" },
  { aidprt: "9917", acdprt: "576", allprt: "006" },
  { aidprt: "9918", acdprt: "576", allprt: "007" },
]


@Component({
  selector: 'app-overlay-card',
  standalone: true,
  imports: [MatCardModule, MatTable, MatPaginator, MatCheckbox],
  templateUrl: './overlay-card.component.html',
  styleUrl: './overlay-card.component.css'
})
export class OverlayCardComponent {
  constructor(private dialogRef: MatDialogRef<OverlayCardComponent>) { }
  closeOverlay(): void {
    this.dialogRef.close();
  }

  displayedColumns: string[] = ["aidprt", "acdprt", "allprt"];
  ptfDataSource = new MatTableDataSource<Wallet>(WALLET_LIST);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  //TODO: ASSIGN THE PAGINATOR IN ORDER TO RETRIEVE THE DATA 
  _assignPaginator(): void {
    setTimeout(() => { this.ptfDataSource.paginator = this.paginator; console.log(this.paginator) })

  }
  
}
