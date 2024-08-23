import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Vehicle } from '../services/vehicle.model';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-vehicle-dialog',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    NgForOf,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './vehicle-dialog.component.html',
  styleUrl: './vehicle-dialog.component.scss'
})
export class VehicleDialogComponent {
    form: FormGroup;
    estatusOptions: string[] = ['ACTIVO', 'INACTIVO'];
  
    constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<VehicleDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Vehicle
    ) {
      this.form = this.fb.group({
        vin: [data?.vin || '', Validators.required],
        placa: [data?.placa || '', Validators.required],
        modelo: [data?.modelo || '', Validators.required],
        estatus: [data?.estatus || 'ACTIVO', Validators.required]
      });
    }
  
    onSave(): void {
      if (this.form.valid) {
        this.dialogRef.close(this.form.value);
      }
    }
  
    onCancel(): void {
      this.dialogRef.close();
    }

}
