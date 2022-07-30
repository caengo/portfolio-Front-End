import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Persona } from 'src/app/models/persona';
import { UsuarioVista } from 'src/app/models/usuario-vista';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-form-edit-persona',
  templateUrl: './form-edit-persona.component.html',
  styleUrls: ['./form-edit-persona.component.css']
})
export class FormEditPersonaComponent implements OnInit {

  idPersona: number = null;
  usuario: UsuarioVista = null;
  persona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.idPersona = this.activatedRoute.snapshot.params["id"];
    this.verificarUsuario();
    if (this.usuario) {
      this.cargarPersona();
    }
  }
  onUpdate(): void {
    this.personaService.update(this.idPersona, this.persona).subscribe(
      data => {
        this.toastr.success('Persona Actualizada', 'OK', {
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
  volver(): void {
    this.router.navigate([`/p/${this.idPersona}/edit`]);
  }
  verificarUsuario(): void {

    if (!this.tokenService.isLogged()) {
      return this.redirectLogin();
    }
    this.usuario = this.tokenService.getUserView();
  }

  cargarPersona(): void {
    this.personaService.detail(this.idPersona).subscribe(
      data => {
        if (data.idUsuario !== this.usuario.id) {
          return this.redirectLogin();
        }
        this.persona = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  redirectLogin(): void {
    this.router.navigate(['/login']);
  }

}