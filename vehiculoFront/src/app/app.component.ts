import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleService } from './services/VehicleService.service';
import { VehicleDialogComponent } from './vehicle-dialog/vehicle-dialog.component';
import { Vehicle } from './services/vehicle.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [VehicleService]
})
export class AppComponent {
  vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['id', 'vin', 'placa', 'modelo', 'estatus', 'actions'];

  constructor(
    private vehicleService: VehicleService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(VehicleDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vehicleService.createVehicle(result).subscribe(() => {
          this.loadVehicles();
        });
      }
    });
  }

  openEditDialog(vehicle: Vehicle): void {
    const dialogRef = this.dialog.open(VehicleDialogComponent, {
      data: vehicle
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.vehicleService.updateVehicle(vehicle.id!, result).subscribe(() => {
          this.loadVehicles();
        });
      }
    });
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.loadVehicles();
    });
  }
}
