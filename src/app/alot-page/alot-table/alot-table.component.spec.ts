import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlotTableComponent } from './alot-table.component';

describe('AlotTableComponent', () => {
  let component: AlotTableComponent;
  let fixture: ComponentFixture<AlotTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlotTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlotTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
