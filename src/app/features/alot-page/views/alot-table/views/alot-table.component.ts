import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { MatTableDataSource, MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { CommonModule } from "@angular/common";
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { OverlayCardComponent } from '../../../../../shared/components/overlay-card/overlay-card.component';
import { MatDialog } from "@angular/material/dialog";
import { AlotTableViewModel } from "../viewmodel/alot-table.viewmodel";
import { AlotService } from "../../../../../core/services/alot.service";


/*Model: Entities=======> View:présentation =====>ViewModel:logique de l'écran: EVENTS - Services injected http*/ 
@Component({
  selector: 'app-alot-table',
  standalone: true,
  imports: [MatTabsModule, MatTableModule, MatPaginatorModule, CommonModule, MatSelectModule, MatCheckboxModule, MatButtonModule],
  templateUrl: './alot-table.component.html',
  styleUrls: ['./alot-table.component.css']
})
export class AlotTableComponent implements AfterViewInit {
  @ViewChild('paginator1', {static:false})  paginator1!:MatPaginator;
  @ViewChild('paginator2', {static:false})  paginator2!:MatPaginator;
  //Inject the MatDialog component
  constructor(private dialog: MatDialog, private alotTableViewModel:AlotTableViewModel , private alotService : AlotService) {}
  dataSource=this.alotTableViewModel.dataSource;
  lotDataSource=this.alotTableViewModel.lotDataSource;
  displayedColumns=this.alotTableViewModel.displayedColumns;
  lotDisplayedColumns=this.alotTableViewModel.lotDisplayedColumns;





  //Method that opens the dialog
  openOverlay(): void {
    this.dialog.open(OverlayCardComponent, {
      disableClose: true, 
      width: '50%',
      height: '75%'     
    });
  }

  _setDataSource(indexNumber:number):void{
    this.alotTableViewModel._setDataSource(indexNumber,this.paginator1,this.paginator2)
  }
  //Setting the paginator after loading the view
  ngAfterViewInit(): void {
    this._setDataSource(0);
  }
  //Assigning the paginator after loading the data
  onTabChange(index: number): void {
    console.log("changing the paginator",index)
    setTimeout(()=>{this._setDataSource(index);},5)
    
  }

  allChecked: boolean = false;
  lotAllChecked: boolean = false;
  //check all content in the table
  checkAll(allChecked: boolean, dataSource: MatTableDataSource<any>): void {
    allChecked = !allChecked;
    dataSource.data.forEach((item) => (item.checked = allChecked));
    if (dataSource === this.alotTableViewModel.dataSource) {
      this.allChecked = allChecked;
    } else {
      this.lotAllChecked = allChecked;
    }
  }
  //check a single element in the table 
  checkItem(no: number, dataSource: MatTableDataSource<any>): void {
    const element = dataSource.data.find((item: any) => item.No === no || item.Nb === no); 
    if (element) {
      element.checked = !element.checked;
      if (dataSource === this.alotTableViewModel.dataSource) {
        this.allChecked = dataSource.data.every((item: any) => item.checked);
      } else {
        this.lotAllChecked = dataSource.data.every((item: any) => item.checked);
      }
    }
  }






// Our services for AlotTable ==============================================================================

Select_initial_wallet_group(){
  this.alotService.Select_initial_wallet_group().subscribe((data)=>{
    console.log(data)
  })
}


p01_alod_azgrpf_t : string = "'0022'" // pour le momonet baad lezem tetbadel bel valeur taa el group initial 
Select_last_wallet_group(p01_alod_azgrpf_t : string){
  this.alotService.Select_last_wallet_group(p01_alod_azgrpf_t).subscribe((data)=>{
    console.log(data)
  })
}







}
