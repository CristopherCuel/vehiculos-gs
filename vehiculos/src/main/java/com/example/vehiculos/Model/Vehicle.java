package com.example.vehiculos.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "vehiculos")
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String vin;
    private String placa;
    private String modelo;

    @Enumerated(EnumType.STRING)
    private Estatus estatus;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public Estatus getEstatus() {
        return estatus;
    }

    public void setEstatus(Estatus estatus) {
        this.estatus = estatus;
    }

    public Vehicle() {
    }

    public Vehicle(Long id, String vin, String placa, String modelo, Estatus estatus) {
        this.id = id;
        this.vin = vin;
        this.placa = placa;
        this.modelo = modelo;
        this.estatus = estatus;
    }
}
