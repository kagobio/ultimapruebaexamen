import { Injectable } from '@angular/core';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  updateEmpleado(index: number, empleado: Empleado) {
    this.empleado[index] = empleado;
    this.saveEmpleado();
  }

  empleado: Empleado[] = [];
  constructor() {
    this.getEmpleado();
  }

  addEmpleado(empleado: Empleado) {
    this.empleado.push(empleado);
    this.saveEmpleado();
  }

  getEmpleado() {
    const addEmpleado = localStorage.getItem('empleado');
    if (addEmpleado) {
      this.empleado = JSON.parse(addEmpleado);
    }
  }

  saveEmpleado() {
    localStorage.setItem('empleado', JSON.stringify(this.empleado));
  }

  deleteEmpleado(index: number) {
    this.empleado.splice(index, 1);
    this.saveEmpleado();
  }

  marcarRemoto(index: number) {
    this.empleado[index].remoto = !this.empleado[index].remoto;
    this.saveEmpleado();
  }

  desmarcarRemoto(index?: number) {
    if (index !== undefined) {
      this.empleado[index].remoto = false;
    } else {
      this.empleado.forEach((empleado) => {
        empleado.remoto = true;
      });
    }
    this.saveEmpleado();
  }
}
