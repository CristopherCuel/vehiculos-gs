import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleDialogComponent } from './vehicle-dialog.component';

describe('VehicleDialogComponent', () => {
  let component: VehicleDialogComponent;
  let fixture: ComponentFixture<VehicleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
