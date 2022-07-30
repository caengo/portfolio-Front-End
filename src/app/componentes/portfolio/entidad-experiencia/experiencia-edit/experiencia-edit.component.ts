import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia-edit',
  templateUrl: './experiencia-edit.component.html',
  styleUrls: ['./experiencia-edit.component.css']
})
export class ExperienciaEditComponent implements OnInit {

  @Input() idPersona: number = null;
  experiencias: Experiencia[] = null;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.idPersona) {
      this.cargarExperiencias();
    }
  }

  cargarExperiencias(): void {
    this.experienciaService.getListByPersona(this.idPersona).subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/lista']);
      }
    );
  }

}
