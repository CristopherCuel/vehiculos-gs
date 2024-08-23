package com.example.vehiculos.Controller;

import com.example.vehiculos.Model.Vehicle;
import com.example.vehiculos.Service.VehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @GetMapping
    public List<Vehicle> getAllVehicles() {
        return vehicleService.getAllVehicles();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Vehicle> getVehicleById(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(vehicle);
    }

    @PostMapping
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.saveVehicle(vehicle);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable Long id, @RequestBody Vehicle vehicleDetails) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle == null) {
            return ResponseEntity.notFound().build();
        }
        vehicle.setVin(vehicleDetails.getVin());
        vehicle.setPlaca(vehicleDetails.getPlaca());
        vehicle.setModelo(vehicleDetails.getModelo());
        vehicle.setEstatus(vehicleDetails.getEstatus());
        Vehicle updatedVehicle = vehicleService.updateVehicle(vehicle);
        return ResponseEntity.ok(updatedVehicle);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVehicle(@PathVariable Long id) {
        Vehicle vehicle = vehicleService.getVehicleById(id);
        if (vehicle == null) {
            return ResponseEntity.notFound().build();
        }
        vehicleService.deleteVehicle(id);
        return ResponseEntity.noContent().build();
    }
}
