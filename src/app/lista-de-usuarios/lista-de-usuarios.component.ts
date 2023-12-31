import { Component } from '@angular/core';
import { Alumno } from '../models/alumno.interface';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: './lista-de-usuarios.component.html',
  styleUrls: ['./lista-de-usuarios.component.css'],
})
export class ListaDeUsuariosComponent {
  alumnos: Alumno[] = [
    {
      nombre: 'Josue',
      fechaInscripcion: new Date(),
      aprobado: false,
    },
    {
      nombre: 'Ana',
      fechaInscripcion: new Date(),
      aprobado: true,
    },
    {
      nombre: 'JOrge',
      fechaInscripcion: new Date(),
      aprobado: false,
    },
  ];
}
