import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-list-experiencia',
  templateUrl: './form-list-experiencia.component.html',
  styleUrls: ['./form-list-experiencia.component.css']
})
export class FormListExperienciaComponent implements OnInit {

  idPersona: number = null;
  usuario: UsuarioVista = null;
  experiencias: Experiencia[] = null;

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idPersona = this.activatedRoute.snapshot.params["idPersona"];
    this.verificarUsuario();
    if (this.usuario) {
      this.cargarExperiencias();
    }
  }

  verificarUsuario(): void {

    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate([`/p/${this.idPersona}/edit`]);
  }
  redirectLogin(): void {
    this.router.navigate(['/login']);
  }
  crear(): void {
    this.router.navigate([`/p/${this.idPersona}/edit/experiencias/crear`]);
  }
  editar(idExp: number): void {
    this.router.navigate([`/p/${this.idPersona}/edit/experiencias/${idExp}`]);
  }
  borrar(idExp: number): void {
    this.experienciaService.delete(idExp).subscribe(
      data => {
        this.toastr.success('Experiencia eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.cargarExperiencias();
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
