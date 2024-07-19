import {  AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Wallet } from '../../../core/models/wallet.model';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';

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
  imports: [MatCardModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './overlay-card.component.html',
  styleUrl: './overlay-card.component.css'
})
export class OverlayCardComponent implements AfterViewInit{
  constructor(private dialogRef: MatDialogRef<OverlayCardComponent>) { }
  closeOverlay(): void {
    console.log(this.ptfDataSource.data);
    console.log('closing the window');
    this.dialogRef.close();
  }

  displayedColumns: string[] = ["aidprt", "acdprt", "allprt"];
  ptfDataSource = new MatTableDataSource<Wallet>(WALLET_LIST);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngAfterViewInit(): void {
      this.ptfDataSource.paginator=this.paginator;
  }
  
}
