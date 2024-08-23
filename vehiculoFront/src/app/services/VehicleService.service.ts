import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private baseUrl = 'http://localhost:8080/api/vehicles';

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.baseUrl);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.baseUrl, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.baseUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
