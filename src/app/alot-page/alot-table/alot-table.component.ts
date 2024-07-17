import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren, viewChildren } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { OverlayCardComponent } from './overlay-card/overlay-card.component';
import { MatDialog } from "@angular/material/dialog";


export interface Ptf {
  No: number;
  grpInit: number;
  prtfInit: number;
  grpFin: number;
  prtfFin: number;
  codeLot: string;
  checked: boolean;
}

const ALOT_TABLE_STATIC_DATA: Ptf[] = [
  { No: 1, grpInit: 1000, prtfInit: 109, grpFin: 1000, prtfFin: 200, codeLot: "LOTSKO", checked: false },
  { No: 2, grpInit: 1100, prtfInit: 110, grpFin: 1091, prtfFin: 300, codeLot: "", checked: false },
  { No: 3, grpInit: 2200, prtfInit: 119, grpFin: 1092, prtfFin: 400, codeLot: "LOT_SKO", checked: false },
  { No: 4, grpInit: 3300, prtfInit: 129, grpFin: 1093, prtfFin: 500, codeLot: "LOTSKO11", checked: false },
  { No: 5, grpInit: 4400, prtfInit: 109, grpFin: 1093, prtfFin: 600, codeLot: "", checked: false },
  { No: 6, grpInit: 5500, prtfInit: 109, grpFin: 1094, prtfFin: 700, codeLot: "LOTSKO", checked: false },
  { No: 7, grpInit: 6600, prtfInit: 109, grpFin: 1089, prtfFin: 800, codeLot: "", checked: false },
  { No: 8, grpInit: 7700, prtfInit: 109, grpFin: 1096, prtfFin: 900, codeLot: "", checked: false },
  { No: 9, grpInit: 8800, prtfInit: 1092, grpFin: 1094, prtfFin: 220, codeLot: "", checked: false },
  { No: 10, grpInit: 9900, prtfInit: 1092, grpFin: 1092, prtfFin: 894, codeLot: "", checked: false },
  { No: 11, grpInit: 4400, prtfInit: 109, grpFin: 1093, prtfFin: 600, codeLot: "", checked: false },
  { No: 12, grpInit: 5500, prtfInit: 109, grpFin: 1094, prtfFin: 700, codeLot: "LOTSKO", checked: false },
  { No: 13, grpInit: 6600, prtfInit: 109, grpFin: 1089, prtfFin: 800, codeLot: "", checked: false },
  { No: 14, grpInit: 7700, prtfInit: 109, grpFin: 1096, prtfFin: 900, codeLot: "", checked: false },
  { No: 15, grpInit: 8800, prtfInit: 1092, grpFin: 1094, prtfFin: 220, codeLot: "", checked: false },
  { No: 16, grpInit: 9900, prtfInit: 1092, grpFin: 1092, prtfFin: 894, codeLot: "", checked: false },
];

export interface LotPrtf {
  Nb: number;
  id: number;
  label: string;
  checked: boolean;
}

const ALOT_TABLE_LOT_DATA: LotPrtf[] = [
  { Nb: 1, id: 5348, label: "LOTIRAP", checked: false },
  { Nb: 2, id: 6548, label: "LOTSKO", checked: false },
  { Nb: 3, id: 5567, label: "LOTMKO", checked: false },
  { Nb: 4, id: 546564654, label: "LOTMKA", checked: false },
  { Nb: 5, id: 654654333, label: "LOTMAKA", checked: false },
  { Nb: 6, id: 6548, label: "LOTSKO", checked: false },
  { Nb: 7, id: 5567, label: "LOTMKO", checked: false },
  { Nb: 8, id: 546564654, label: "LOTMKA", checked: false },
  { Nb: 9, id: 6548, label: "LOTSKO", checked: false },
  { Nb: 10, id: 5567, label: "LOTMKO", checked: false },
  { Nb: 11, id: 546564654, label: "LOTMKA", checked: false },
];

@Component({
  selector: 'app-alot-table',
  standalone: true,
  imports: [MatTabsModule, MatTableModule, MatPaginatorModule, CommonModule, MatSelectModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './alot-table.component.html',
  styleUrls: ['./alot-table.component.css']
})
export class AlotTableComponent implements AfterViewInit {

  //Inject the MatDialog component
  constructor(private dialog: MatDialog) {}
  //Method that opens the dialog
  openOverlay(): void {
    this.dialog.open(OverlayCardComponent, {
      disableClose: true, 
      width: '50%',
      height: '75%'     
    });
  }

  displayedColumns: string[] = ['Select', 'No', 'grpInit', 'prtfInit', 'grpFin', 'prtfFin', 'codeLot'];
  lotDisplayedColumns: string[] = ['Select', 'Nb', 'id', 'label']; 
  dataSource = new MatTableDataSource<Ptf>(ALOT_TABLE_STATIC_DATA);
  lotDataSource = new MatTableDataSource<LotPrtf>(ALOT_TABLE_LOT_DATA);

  @ViewChild('paginator1', {static:false})  paginator1!:MatPaginator;
  @ViewChild('paginator2', {static:false})  paginator2!:MatPaginator;


  //This method is used to assign a paginator to its correspending data source when triggering change of the window
  _setDataSource(indexNumber:number):void {
    setTimeout(() => {
      if(indexNumber===0){
        this.dataSource.paginator=this.paginator1;
      }
      else{
        this.lotDataSource.paginator=this.paginator2;
      }
      console.log("Paginator 1: ",this.paginator1);
      console.log("Paginator 2: ",this.paginator2);
    });
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator=this.paginator1;
  }

  allChecked: boolean = false;
  lotAllChecked: boolean = false;

  checkAll(allChecked: boolean, dataSource: MatTableDataSource<any>): void {
    allChecked = !allChecked;
    dataSource.data.forEach((item) => (item.checked = allChecked));
    if (dataSource === this.dataSource) {
      this.allChecked = allChecked;
    } else {
      this.lotAllChecked = allChecked;
    }
  }

  checkItem(no: number, dataSource: MatTableDataSource<any>): void {
    const element = dataSource.data.find((item: any) => item.No === no || item.Nb === no); 
    if (element) {
      element.checked = !element.checked;
      if (dataSource === this.dataSource) {
        this.allChecked = dataSource.data.every((item: any) => item.checked);
      } else {
        this.lotAllChecked = dataSource.data.every((item: any) => item.checked);
      }
    }
  }
}
