import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Acercade } from 'src/app/models/acercade';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { AcercadeService } from 'src/app/service/acercade.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-form-edit-acercade',
  templateUrl: './form-edit-acercade.component.html',
  styleUrls: ['./form-edit-acercade.component.css']
})
export class FormEditAcercadeComponent implements OnInit {

  idPersona: number = null;
  usuario: UsuarioVista = null;
  acercade: Acercade = null;

  constructor(
    private acercadeService: AcercadeService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idPersona = this.activatedRoute.snapshot.params["idPersona"];
    this.verificarUsuario();
    if (this.usuario) {
      this.cargarAcercade();
    }
  }

  verificarUsuario(): void {

    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
  }

  cargarAcercade(): void {
    this.acercadeService.getByPersona(this.idPersona).subscribe(
      data => {
        this.acercade = data;
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

  onUpdate(): void {
    this.acercadeService.update(this.acercade.id, this.acercade).subscribe(
      data => {
        this.toastr.success('Acerca De Actualizado', 'OK', {
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
