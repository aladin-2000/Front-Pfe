import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-overlay-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, MatCheckboxModule],
  templateUrl: './overlay-card.component.html',
  styleUrls: ['./overlay-card.component.css']
})
export class OverlayCardComponent<T> implements AfterViewInit, OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() data: T[] = [];

  ptfDataSource!: MatTableDataSource<T>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<OverlayCardComponent<T>>,
    @Inject(MAT_DIALOG_DATA) public dialogData: { data: T[], displayedColumns: string[] }
  ) {}

  ngOnInit(): void {
    if (this.dialogData) {
      this.data = this.dialogData.data;
      this.displayedColumns = this.dialogData.displayedColumns;
    }
    this.ptfDataSource = new MatTableDataSource<T>(this.data);
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.ptfDataSource.paginator = this.paginator;
    }
  }

  closeOverlay(): void {
    this.dialogRef.close();
  }
}
