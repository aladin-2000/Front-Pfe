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
  { No:1, grpInit: 100, prtfInit: 109, grpFin: 10, prtfFin: 200000, codeLot: "LOTSKO" },
  { No:2,grpInit: 11, prtfInit: 1090, grpFin: 1091, prtfFin: 200231, codeLot: "" },
  { No:3,grpInit: 22, prtfInit: 10900, grpFin: 1092, prtfFin: 2001231, codeLot: "LOT_SKO" },
  { No:4,grpInit: 33, prtfInit: 109000, grpFin: 1093, prtfFin: 2001651, codeLot: "LOTSKO11" },
  { No:5,grpInit: 44, prtfInit: 1091, grpFin: 1093333, prtfFin: 200651, codeLot: "" },
  { No:6,grpInit: 55, prtfInit: 10911, grpFin: 109456, prtfFin: 20085, codeLot: "LOTSKO" },
  { No:7,grpInit: 66, prtfInit: 109111, grpFin: 108949, prtfFin: 20085, codeLot: "" },
  { No:8,grpInit: 77, prtfInit: 1092, grpFin: 109654, prtfFin: 200894, codeLot: "" },
  { No:9,grpInit: 88, prtfInit: 10922, grpFin: 1094189, prtfFin: 200984, codeLot: "" },
  { No:10,grpInit: 99, prtfInit: 109222, grpFin: 10923312321, prtfFin: 894200, codeLot: "" },
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