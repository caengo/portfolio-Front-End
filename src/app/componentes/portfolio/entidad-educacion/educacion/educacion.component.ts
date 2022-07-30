import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionArray: Educacion[] = [
    { id: 1, fechaInicio: "1985", fechaFinal: "1991", nombre: "ENET N° 1", resenia: "Estudio de Nivel Secundario", titulo: "Técnico Electromecánico", descripcion: "Técnico Industrial Especializado en Sistemas Electromecánicos", referencia: "https://dti.mendoza.edu.ar/gem/ingreso/publico/escuela/1099/2" },
    { id: 2, fechaInicio: "2000", fechaFinal: "2003", nombre: "ITU de UNC", resenia: "Estudio de Nivel Terciario", titulo: "Técnico Universitario en Redes y Telecomunicaciones", descripcion: "Tecnico Informático con Orientación en Redes y Telecomunicaciones", referencia: "https://itu.uncuyo.edu.ar/estudios/carrera/tecnicatura-universitaria-redes-de-datos-y-telecomunicaciones" },
    { id: 3, fechaInicio: "2008", fechaFinal: "2011", nombre: "UVM", resenia: "Estudio de Nivel Universitario", titulo: "Licenciatura en Gestión de Empresas", descripcion: "Licenciatura Orientada en la Comunicación y Gestion General de Empresas otorgado por Universidad de Viña del Mar", referencia: "https://www.uvm.cl/" },
    { id: 4, fechaInicio: "2021", fechaFinal: "2022", nombre: "Argentina Programa INTI", resenia: "Técnicas de Programación en Frontend y Backend", titulo: "Full Stack Jr.", descripcion: "Arquitectura WEB distribuida (Frontend y Backend).", referencia: "https://argentinaprograma.inti.gob.ar/" }
  ];
  selecEducacion: Educacion = new Educacion();




  constructor() { }

  ngOnInit(): void {
  }

}
