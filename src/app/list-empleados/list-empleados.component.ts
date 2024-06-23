import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-empleados.component.html',
  styleUrl: './list-empleados.component.css',
})
export class ListEmpleadosComponent {
  empleados: Empleado[] = [];
  nombre: string = '';

  constructor(private empleadoService: EmpleadoService) {
    this.empleadoService.getEmpleado();
    this.empleados = this.empleadoService.empleado;
  }

  addEmpleado() {
    this.empleadoService.addEmpleado({
      id: 0,
      nombre: this.nombre,
      apellidos: '',
      puesto: '',
      telefono: '',
      remoto: false,
      avatar: '',
    });
    this.nombre = '';
  }

  deleteEmpleado(id: number) {
    this.empleadoService.deleteEmpleado(id);
  }

  marcarRemoto(id: number) {
    this.empleadoService.marcarRemoto(id);
  }

  desmarcarRemoto() {
    this.empleadoService.desmarcarRemoto();
  }

  updateEmpleado(id: number, empleado: Empleado) {
    this.empleadoService.updateEmpleado(id, empleado);
  }

  getAvatar(empleado: Empleado) {
    const nombreUrl = encodeURIComponent(empleado.nombre);
    return `https://api.multiavatar.com/${nombreUrl}.png`;
  }
}
