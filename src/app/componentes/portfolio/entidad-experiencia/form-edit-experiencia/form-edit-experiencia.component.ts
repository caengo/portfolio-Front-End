import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edit-experiencia',
  templateUrl: './form-edit-experiencia.component.html',
  styleUrls: ['./form-edit-experiencia.component.css']
})
export class FormEditExperienciaComponent implements OnInit {

  idPersona: number = null;
  idExp: number = null;
  usuario: UsuarioVista = null;
  experiencia: Experiencia = null;

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idPersona = this.activatedRoute.snapshot.params["idPersona"];
    this.idExp = this.activatedRoute.snapshot.params["id"];
    this.verificarUsuario();
    if (this.usuario) {
      this.cargarExperiencia();
    }
  }

  verificarUsuario(): void {
    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
  }

  cargarExperiencia(): void {
    this.experienciaService.detail(this.idExp).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate([`/p/${this.idPersona}/edit/experiencias`]);
  }
  redirectLogin(): void {
    this.router.navigate(['/login']);
  }

  onUpdate(): void {
    this.experienciaService.update(this.experiencia.id, this.experiencia).subscribe(
      data => {
        this.toastr.success('Experiencia Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        if (err.status == 401 || err.status == 403)
          return this.redirectLogin();
        this.volver();
      }
    );
  }

}
