import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALOTFormComponent } from './alot-form.component';

describe('ALOTFormComponent', () => {
  let component: ALOTFormComponent;
  let fixture: ComponentFixture<ALOTFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ALOTFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ALOTFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
