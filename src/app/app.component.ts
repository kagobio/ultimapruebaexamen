import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormEmpleadosComponent } from './form-empleados/form-empleados.component';
import { ListEmpleadosComponent } from './list-empleados/list-empleados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormEmpleadosComponent, ListEmpleadosComponent],
  template: `<app-form-empleados></app-form-empleados>
    <app-list-empleados></app-list-empleados>`,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ultimapruebaexamen';
}
