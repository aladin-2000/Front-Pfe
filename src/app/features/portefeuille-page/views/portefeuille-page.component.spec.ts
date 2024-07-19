import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuillePageComponent } from './portefeuille-page.component';

describe('PortefeuillePageComponent', () => {
  let component: PortefeuillePageComponent;
  let fixture: ComponentFixture<PortefeuillePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortefeuillePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortefeuillePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
