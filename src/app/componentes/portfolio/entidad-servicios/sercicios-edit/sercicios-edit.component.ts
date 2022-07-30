import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-sercicios-edit',
  templateUrl: './sercicios-edit.component.html',
  styleUrls: ['./sercicios-edit.component.css']
})
export class SerciciosEditComponent implements OnInit {

  servicioArray: Skill[] = [
    { id: 1, servicio: "Logística", porcentaje: "85%" },
    { id: 2, servicio: "Angular", porcentaje: "40%" },
    { id: 3, servicio: "MySQL", porcentaje: "45%" },
    { id: 4, servicio: "Java", porcentaje: "35%" }
  ];

  selecServicio: Skill = new Skill();

  abrirParaEditar(skill: Skill) {
    this.selecServicio = skill;
  }
  agregarOeditar() {
    if (this.selecServicio.id === 0) {
      this.selecServicio.id = this.servicioArray.length + 1;
      this.servicioArray.push(this.selecServicio);
    }
    this.selecServicio = new Skill();
  }

  eliminar() {
    if (confirm('Estas Seguro de Eliminar?')) {
      this.servicioArray = this.servicioArray.filter(ser => ser != this.selecServicio);
      this.selecServicio = new Skill();
    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
