import { AfterViewInit, Component, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';



type Item={
  [key:string]:any;
  isSelected:boolean;
}

@Component({
  selector: 'app-overlay-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, MatCheckboxModule,MatButtonModule],
  templateUrl: './overlay-card.component.html',
  styleUrls: ['./overlay-card.component.css']
})
export class OverlayCardComponent<T> implements AfterViewInit, OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() data: Item[] = [];
  ptfDataSource!: MatTableDataSource<Item>;
  //Custom Styles
  selectedStyle={
    backgroundColor:'#FCFCFC',
    fontWeight:'bold'
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selectedElement:any;
  constructor(
    private dialogRef: MatDialogRef<OverlayCardComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { data: Item[], displayedColumns: string[] }
  ) {}

  ngOnInit(): void {
    if (this.dialogData) {
      this.data = this.dialogData.data;
      this.displayedColumns = this.dialogData.displayedColumns;
    }
    this.ptfDataSource = new MatTableDataSource<Item>(this.data);
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.ptfDataSource.paginator = this.paginator;
    }
  }

  closeOverlay(): void {
    console.log("closing the dialog and this is the emitted value")
    console.log(this.selectedElement)
    this.dialogRef.close();
  }

  setSelected(row:Item):void{
    const id=Object.values(row)[0]
    console.log(id)
    this.selectedElement=id;
  }
  toggleClick(row:Item){
    this.untoggleClick(this.data)
    row.isSelected=!row.isSelected
  }
  untoggleClick(data:Item[]){
    data.forEach(element=>{
      element.isSelected=false
    })
  }
  applyStyles(item:Item):{[key:string]:string}{
    return item.isSelected?this.selectedStyle:{}
  }
  submitValue():void{
    this.dialogRef.close(this.selectedElement);
  }
}
