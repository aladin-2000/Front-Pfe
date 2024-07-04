import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator,MatPaginatorModule } from "@angular/material/paginator";
import {MatTableDataSource,MatTableModule} from "@angular/material/table";

export interface LotPtf {
  No:number
  grpInit : number
  prtfInit : number
  grpFin: number
  prtfFin:number
  codeLot:string
}
const ALOT_TABLE_STATIC_DATA: LotPtf[] = [
  { No:0, grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:1,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:2,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:3,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:4,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:5,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:6,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:7,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:8,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
  { No:9,grpInit: 0, prtfInit: 109, grpFin: 109, prtfFin: 200, codeLot: "LOTSKO" },
];

@Component({
    selector: 'app-alot-table',
    standalone: true,
    imports: [MatTableModule,MatPaginatorModule],
    templateUrl: './alot-table.component.html',
    styleUrl: './alot-table.component.css'
 })
 export class AlotTableComponent implements AfterViewInit {
  displayedColumns: string[]=['No','grpInit', 'prtfInit', 'grpFin','prtfFin','codeLot']
  dataSource=new MatTableDataSource<LotPtf>(ALOT_TABLE_STATIC_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  ngAfterViewInit(): void {
      this.dataSource.paginator=this.paginator;
  }
 }