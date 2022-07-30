import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Experiencia } from 'src/app/models/experiencia';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-form-create-experiencia',
  templateUrl: './form-create-experiencia.component.html',
  styleUrls: ['./form-create-experiencia.component.css']
})
export class FormCreateExperienciaComponent implements OnInit {

  idPersona: number = null;
  usuario: UsuarioVista = null;
  experiencia: Experiencia = new Experiencia("", "", "", "", "", "", "");

  constructor(
    private experienciaService: ExperienciaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idPersona = this.activatedRoute.snapshot.params["idPersona"];
    this.experiencia.idPersona = this.idPersona;
    this.verificarUsuario();
  }

  verificarUsuario(): void {
    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
  }

  volver(): void {
    this.router.navigate([`/p/${this.idPersona}/edit/experiencias`]);
  }
  redirectLogin(): void {
    this.router.navigate(['/login']);
  }

  onCreate(): void {
    this.experienciaService.save(this.experiencia).subscribe(
      data => {
        this.toastr.success('Experiencia Creada', 'OK', {
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
        console.log(err);
        this.volver();
      }
    );
  }

}
