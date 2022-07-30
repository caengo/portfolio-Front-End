import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/models/proyecto';

@Component({
  selector: 'app-proyectos-edit',
  templateUrl: './proyectos-edit.component.html',
  styleUrls: ['./proyectos-edit.component.css']
})
export class ProyectosEditComponent implements OnInit {

  proyectoArray: Proyecto[] = [
    { id: 1, nombre: "Soporte Técnico IT", resenia: "Proyectos de Field Services, entrega de asistencia técnica especializada según la modalidad On Site (con atención en el puesto de trabajo)  en Empresas  (con atención en área de reparación designada, por Ejemplo, Mapfre, Sencosud, Easy, Villavicencio, PricewaterhouseCoopers), a fin  de brindar  soluciónes a las necesidades  cotidianas de los usuarios, ya sean incidentes o peticiones de infraestructura tecnológica:  PC, notebook, impresora, SW de productividad, sistema operativo, entre otros.   ", tecnologia: "Linux, MySQL, Windows", referencia: "https://www.novatium.com.ar/" },
    { id: 2, nombre: "TDA y Conectar Igualdad", resenia: "Proyecto de Logística e instalación de dispositivos de telecomunicaciones para brindar un servicio de infraestructura, multiplexado y transmisión para señales de televisión en la norma ISDB-T. Además se implementó un laboratorio IT para reparaciones de dispositivos de comunicaciones como Netbooks y otros  ", tecnologia: "UHF y Sistema de Software Propietario Integral Logistico", referencia: "https://conectarigualdad.edu.ar/inicio" },
    { id: 3, nombre: "Portfolio Web", resenia: "Desarrollo de aplicación web full stack, que muestra datos personales, estudios cursados, experiencia laboral y conocimiento de las tecnologías. Aplicación de arquitectura distribuida en front end, back end y APIs necesarias.", tecnologia: "Java, Angular, MySQL, Spring Boot", referencia: "https://argentinaprograma.inti.gob.ar/" }
  ];

  selecProyecto: Proyecto = new Proyecto();

  abrirParaEditar(proyecto: Proyecto) {
    this.selecProyecto = proyecto;
  }
  agregarOeditar() {
    if (this.selecProyecto.id === 0) {
      this.selecProyecto.id = this.proyectoArray.length + 1;
      this.proyectoArray.push(this.selecProyecto);
    }
    this.selecProyecto = new Proyecto();
  }

  eliminar() {
    if (confirm('Estas Seguro de Eliminar?')) {
      this.proyectoArray = this.proyectoArray.filter(pro => pro != this.selecProyecto);
      this.selecProyecto = new Proyecto();
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
