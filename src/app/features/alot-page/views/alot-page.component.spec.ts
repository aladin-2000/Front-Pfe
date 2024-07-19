import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlotPageComponent } from './alot-page.component';

describe('AlotPageComponent', () => {
  let component: AlotPageComponent;
  let fixture: ComponentFixture<AlotPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlotPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlotPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
