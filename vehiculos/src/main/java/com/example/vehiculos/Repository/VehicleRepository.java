package com.example.vehiculos.Repository;

import com.example.vehiculos.Model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
}

