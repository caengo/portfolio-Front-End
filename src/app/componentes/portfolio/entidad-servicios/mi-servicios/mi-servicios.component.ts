import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/skill';

@Component({
  selector: 'app-mi-servicios',
  templateUrl: './mi-servicios.component.html',
  styleUrls: ['./mi-servicios.component.css']
})
export class MiServiciosComponent implements OnInit {

  servicioArray: Skill []= [
    {id: 1, servicio: "Logística", porcentaje: "85%"},
    {id: 2, servicio: "Angular", porcentaje: "40%"},
    {id: 3, servicio: "MySQL", porcentaje: "45%"},
    {id: 4, servicio: "Java", porcentaje: "35%"}    
  ];

  selecServicio: Skill = new Skill();

  

  constructor() { }

  ngOnInit(): void {
  }

}
