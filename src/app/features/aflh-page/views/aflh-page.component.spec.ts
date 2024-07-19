import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AflhPageComponent } from './aflh-page.component';

describe('AflhPageComponent', () => {
  let component: AflhPageComponent;
  let fixture: ComponentFixture<AflhPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AflhPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AflhPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
