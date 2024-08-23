export interface Vehicle {
    id?: number;
    vin: string;
    placa: string;
    modelo: string;
    estatus: 'ACTIVO' | 'INACTIVO';
  }
  